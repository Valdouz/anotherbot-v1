const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Site')
        .setURL('https://anotherbot.tk/')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'site',
  };