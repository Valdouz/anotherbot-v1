const db = require('quick.db');
const { randomBytes } = require('crypto');
const { createCanvas, loadImage, Image } = require('canvas')
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = async (client, member) => {
  let valid = false;

  let guild = member.guild;

  let config = db.get(`config.${guild.id}`);
  if (config.captcha) {

    console.log('captcha')

    const text = randomBytes(32).toString("hex").toUpperCase().replace(/[^a-z]/gi, "").substr(0, 5).split('');
    console.log(text)

    const canvas = createCanvas(300,100);
    const ctx = canvas.getContext('2d');

    ctx.lineJoin = 'miter';
    ctx.textBaseLine = 'middle';

    let coordinates = [];

    for (let i = 0; i < 5; i++) {
      const base = Math.floor(300/5);
      let width = base*(i+0.2)
      let height = Math.floor(Math.random()*(100 - 60)) + 30

      coordinates.push([width, height])
    }

    coordinates = coordinates.sort((a, b) => a[0]-b[0])

    ctx.strokeStyle = '#'+Math.floor(Math.random()*999999);
    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);
    ctx.lineWidth = 5;
    console.log(coordinates.lenght)
    for (i in coordinates) {
      ctx.lineTo(coordinates[i][0], coordinates[i][1])
    };
    ctx.stroke();

    ctx.font = `12px Sans`;
    for (i in coordinates) {
      ctx.fillStyle = '#'+Math.floor(Math.random()*999999);
      ctx.fillText(text[i], coordinates[i][0], coordinates[i][1])
    }

    let image = new MessageAttachment(canvas.toBuffer(), 'canvas.png');

    let role = guild.roles.cache.get(db.get(`config.${guild.id}.captchaRole`));
    if (!role) {
      guild.roles.create({data:{ name: 'Non verifie', color: 'GRAY'}}).then(newRole => {
        db.set(`config.${guild.id}.captchaRole`, newRole.id)
        guild.channels.cache.forEach(channel => {
            channel.createOverwrite(newRole, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGE_HISTORY: false
            })
        })
      });
    }

    let channel = client.channels.cache.get(db.get(`config.${guild.id}.captchaChannel`))
    if (!channel) guild.channels.create('captcha').then(channel => db.set(`config.${guild.id}.captchaChannel`, channel.id));

    channel.updateOverwrite(role, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true
    })

    channel.updateOverwrite(client.user, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true
    })

    channel.updateOverwrite(guild.id, {
      VIEW_CHANNEL: false,
      SEND_MESSAGES: false,
      READ_MESSAGE_HISTORY: false
    })

    member.roles.add(role);

    channel.send(`${member.user}, veuillez valider le captcha en envoyant ici les 5 lettres majuscules de l'image ci-dessous.`, image);

    const filter = (message) => {
      return message.author.id == member.user.id;
    };

    let collector = channel.createMessageCollector(filter, { time: 30000 });

    collector.once('collect', message => {
      if (message.content.toLowerCase() == text.join('').toLowerCase()) {
        member.roles.remove(role);
        valid = true;

        channel.bulkDelete(5)

        if (db.get(`config.${guild.id}.welcome`)) {
          // TODO: welcome image generating
        }
      } else {
        member.user.send('Vous avez rate la validation du captcha.');
        member.kick('Captcha invalide !')
        channel.bulkDelete(5)
      }
    })

    setTimeout(() => {
      if (valid) return;
      member.user.send('La validation du captcha a expire !')
      member.kick('Captcha expire !')
      channel.bulkDelete(5)
    }, 30000)

  }
}
