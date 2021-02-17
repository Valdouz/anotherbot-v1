const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c215e9')
        .setTitle(message.author.username + ' ping')
        .setImage("https://media1.tenor.com/images/885dc039da5d39ff4b6fdd1c28a18bd2/tenor.gif?itemid=19659504")
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'ping',
    category: "fun",
    utility: "Ping quelqu'un"
  };