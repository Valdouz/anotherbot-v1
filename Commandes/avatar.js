const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

  if (!message.mentions.users.size) {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#c215e9')
    .setTitle('Voici votre avatar :')
    .setImage(`${message.author.displayAvatarURL()}`)
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
    return message.channel.send(embed)

    }


 const avatarList = message.mentions.users.map(user => {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#c215e9')
    .setTitle(`Voici l\'avatar de : ${user.username}`)
    .setImage(`${user.displayAvatarURL()}`)
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());

     message.channel.send(embed)
    });
    }


module.exports.help = {
  name:  "avatar",
  alias : ["pp", "pdp", "photo",  "Avatar",  "Pp", "Pdp", "Photo"],
  category: 'fun',
  utility: 'permet d\'afficher la photo de profil de quelqu\'un.'
  }
