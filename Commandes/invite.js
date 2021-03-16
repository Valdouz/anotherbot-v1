const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Invitation')
        .setURL('https://discord.com/oauth2/authorize?client_id=790280928655310858&scope=bot&permissions=8')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'invite',
  };