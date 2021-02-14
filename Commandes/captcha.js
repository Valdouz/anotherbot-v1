const db = require('quick.db');
const Discord = require('discord.js')

module.exports = {
  help:{
    name:'captcha',
    alias: ['ca'],
    utility:'Configure le captcha',
    category: 'automod'
  },
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(':x: | Vous devez avoir la permission `Gerer le serveur` pour executer cette commande.')
    );

    if (args[0] == 'enable') {
      db.set(`config.${message.guild.id}.captcha`, true);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription(':white_check_mark: | Le captcha a bien ete active !')
      );
    }
    if (args[0] == 'disable') {
      db.set(`config.${message.guild.id}.captcha`, false);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription(':white_check_mark: | Le captcha a bien ete desactive !')
      );
    }
    if (args[0] == 'channel') {
      let channel = message.guild.channels.cache.find(channel => channel.id == args[1] || channel.name.startsWith(args[1]) || channel.name.endsWith(args[1]));

      if (!channel) return message.channel.send(
        new Discord.MessageEmbed()
          .setcolor('ORANGE')
          .setDescription(':warning: | Je n\'ai trouve aucun salon avec cet identifiant ou ce nom. Veuillez reessayer.')
      );

      db.set(`config.${message.guild.id}.captchaChannel`, channel.id);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription(`:white_check_mark: | Le salon de captcha sera maintenant bien : <#${db.get(`config.${message.guild.id}.captchaChannel`)}>.`)
      );
    }

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Veuillez utiliser la commande de la maniere suivante :
          captcha enable, pour activer le captcha
          captcha disable, pour desactiver le captcha
          captcha channel, pour modifier le salon de captcha.`)
    )
  }
}
