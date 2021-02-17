const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c215e9')
        .setTitle(message.author.username + ' cherche glooobp')
        .setImage("https://c.tenor.com/SDV1WzumqncAAAAM/turtle-cute.gif")
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'glooobp',
    category: "easteregg",
  };