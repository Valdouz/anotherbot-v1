const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

  if (!message.mentions.users.size) {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('RANDOM')
    .setTitle('Voici votre avatar :')
    .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024, format: 'png'}))
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL({dynamic: true}));
    return message.channel.send(embed)

    }


 const avatarList = message.mentions.users.map(user => {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('RANDOM')
    .setTitle(`Voici l\'avatar de : ${user.username}`)
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: 'png'}))
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL({dynamic: true}));

     message.channel.send(embed)
    });
    }


module.exports.help = {
  name:  "avatar",
  alias : ["pp", "pdp", "photo",  "Avatar",  "Pp", "Pdp", "Photo"],
  category: 'fun',
  utility: 'Permet d\'afficher la photo de profil de quelqu\'un.'
  }
