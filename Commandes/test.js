const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c215e9')
        .setTitle(':white_check_mark: Test réussi')
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'test',
  };