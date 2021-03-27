const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const ytdl = require('ytdl-core');
const ytsr = require('ytsr');

module.exports.run = (client, message, args) => {


    let voice = msg.member.voice.channel;
    let serverQueue = client.queue.get(msg.guild.id)

    if (!voice) return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor('4e3f7b')
        .setDescription(':x: | Vous devez être dans un salon vocal pour effectuer cette commande !')
    );

    let clientMember = msg.guild.member(client.user)
    if (clientMember.voice.channel !== voice && clientMember.voice.channel) return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor('4e3f7b')
        .setDescription(':x: | Je suis déja dans un salon vocal... Attendez un peu !')
    )

    let clientPerms = voice.permissionsFor(client.user);
    if (!clientPerms.has('SPEAK') || !clientPerms.has('CONNECT')) return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor('4e3f7b')
        .setDescription(':x: | Je n\'ai pas la permission de rejoindre et parler dans ce salon vocal. Veuillez m\'y autoriser !')
    )

    if (args.lenght < 1) return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor('4e3f7b')
        .setDescription(':x: | Vous devez indiquer un titre de musique a chercher !')
    )

    msg.channel.send(
      new Discord.MessageEmbed()
        .setColor('1a356f')
        .setDescription('Recherche de musique en cours...')
    ).then(async message => {
      let search = await ytsr(args.join(' '))
      let results = []

      for (let i = 0; i < 5; i++) {
        results.push(search.items[i])
      }

      let choice = '';

      for (i in results) {
        choice += `\`${parseInt(i)+1}\` - ${results[i].title}\n`
      }

      message.edit(
        new Discord.MessageEmbed()
          .setColor('1a356f')
          .setDescription(`Quel est le numéro de la musique que vous souhaitez jouer ?\n\n${choice}`)
      )

      message.react('1️⃣');
      message.react('2️⃣');
      message.react('3️⃣');
      message.react('4️⃣');
      message.react('5️⃣');

      let emojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣']
      let filter = (reaction, user) => {
        return emojis.includes(reaction.emoji.name) && user.id == msg.author.id
      }

      let toPlay;

      const collector = message.createReactionCollector(filter, { time: 30000 });

      collector.once('collect', async (reaction, user) => {
        switch (reaction.emoji.name) {
          case '1️⃣':
            toPlay = results[0]
            queueMusic()
          break;
          case '2️⃣':
            toPlay = results[1]
            queueMusic()
          break;
          case '3️⃣':
            toPlay = results[2]
            queueMusic()
          break;
          case '4️⃣':
            toPlay = results[3]
            queueMusic()
          break;
          case '5️⃣':
            toPlay = results[4]
            queueMusic()
          break;
        }
      })

      async function queueMusic() {
        toPlay.addedBy = msg.author

        if (!serverQueue) {
          let queueBase = {
            channel: voice,
            updateChannel: msg.channel,
            songs: [toPlay],
            volume: 1,
            playing: true,
            connection: null,
            loop: false,
            player: null
          }

          client.queue.set(msg.guild.id, queueBase);

          let connection = await voice.join();
          queueBase.connection = connection;

          client.functions.play(client, message.guild)
        } else {
          serverQueue.songs.push(toPlay)
          msg.channel.send(
            new Discord.MessageEmbed()
              .setColor('1a356f')
              .setDescription(`:musical_note: | \`${toPlay.title}\` a bien été ajouté a la queue de lecture !`)
          )
        }

      }
    })
  }


module.exports.help = {
    name: 'play',
    alias: ["p", "mp", "pm", "Play", "P", "Mp", "Pm"],
    category: "music",
    utility: "permet de connecter le bot et commencer la musique.",
    usage: "`.play <url>`"
  };