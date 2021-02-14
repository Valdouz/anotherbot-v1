const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(message.member.permissions.has('MANAGE_MESSAGES')) {
        if(parseInt(args[0])) {
          if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('il faut spécifier un ***nombre*** entre 1 et 100!');

          const messages = await message.channel.messages.fetch({
            limit: Math.min(args[0], 100),
            before: message.id,
          });

          message.delete();
          await message.channel.bulkDelete(messages);

          const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor("#dc143c")
            .setDescription(`**Action**: clear\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)

          message.channel.send(embed).then(msg => { setTimeout(function() { msg.delete()}, 10000 )});
         } else {

        const embed2 = new MessageEmbed()
          .setTitle(`❌Erreur!❌`)
          .setColor(`#FF0000`)
          .setDescription(`<@${message.author.id}>, merci d'entrer un nombre compris entre 1 et 100!`)
          .setTimestamp();

          message.channel.send(embed2);
          }
      } else {
        const embed3 = new MessageEmbed()
          .setTitle(`❌Erreur!❌`)
          .setColor(`#FF0000`)
          .setDescription(`<@${message.author.id}>, Tu n'as pas les permissions requises!`)
          .setTimestamp();

          message.channel.send(embed3);
      }

}

module.exports.help = {
    name: 'clear',
    category: 'moderation',
    utility: 'permet d\'effacer des messages en masse dans le salon'
  };
