const settings = require('../config.js');
const ms = require('ms')
const Discord = require("discord.js");
const guild = require("../index.js");
const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

module.exports.run = (client, message, args) => {

    const Erreur = new Discord.MessageEmbed()
    .setTitle(`❌Erreur!❌`)
    .setColor(`#FF0000`)
    .setDescription("Vous n'avez pas la permission `ADMINISTRATOR`")
    const lockoff = new Discord.MessageEmbed()
    .setTitle(`✅Réussi✅`)
    .setColor(`GREEN`)
    .setDescription("Le salon est désormais déverrouiller")
    const lockon = new Discord.MessageEmbed()
    .setTitle(`✅Réussi✅`)
    .setColor(`#FF0000`)
    .setDescription("Le salon est désormais le salon est désormais verrouillé")
    const duree = new Discord.MessageEmbed()
    .setTitle(`❌Erreur!❌`)
    .setColor(`#FF0000`)
    .setDescription('Vous devez spécifier une durée pour le verrouillage')
    

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(Erreur)
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply(duree);
  if (validUnlocks.includes(time)) {
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
      message.channel.send(lockoff);
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    if (ms(time) >= 2147483647) return message.reply('Le temps spécifier est trop long ');
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
      message.channel.send(`Channel lock pour ${ms(ms(time), { long:true })}. Pour retirer, faites **.lock ${validUnlocks[Math.floor(Math.random() * validUnlocks.length)]}**`).then(() => {
    if(!guild.name.endsWith('🔒')) {
              guild.edit({ name: g.name + ' 🔒'});
          } else {
            guild.edit({ name: g.name.replace(/\s*🔒/, '')});
          }
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(message.channel.send(lockon)).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
module.exports.help = {
    name: 'lock',
  };
