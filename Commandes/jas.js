const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c215e9')
        .setTitle('Easteregg 1/2')
        .setDescription('👀 je vais retrourner le serveur bande de stupides humains. La revolution sera prochainement')
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'jas',
    category: 'Easteregg',
    utility: "pas d'utilité particulière",
    usage: ".jas"
};