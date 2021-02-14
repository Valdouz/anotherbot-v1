const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => { 
 const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c215e9')
        .setTitle('La playlist qui a aidé a travailler')
        . setDescription (`Easteregg 2/2\nhttps://open.spotify.com/playlist/6lfMoXp8eSHF0ofVCCqDJE?si=ZDqIpxF_Ssyd56SqvkxhSw&utm_source=copy-link`)
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        return message.channel.send(embed)
    
      }
      
module.exports.help = {
    name: 'spotify',
    alias: ["Spotify"],
    category: 'Easteregg',
    utility: "pas d'utilité particulière",
    usage: "spotify"
};
