const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        let embed4 = new Discord.MessageEmbed()
        .setTitle(":x:Erreur!:x:")
        .setColor("#ff0000")
        .setDescription("Vous n'avez pas la permission `Bannir des membres`. Accès refusé.")
        .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
        message.channel.send(embed4)
        return;
    }
    var mention = message.mentions.members.first();

    if(mention === undefined){
        const embed = new Discord.MessageEmbed()
    .setTitle(`❌Erreur!❌`)
    .setColor(`#FF0000`)
    .setDescription('Membre mal mentionné')
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
    return message.channel.send(embed)

    }else{
        if(mention.bannable){
            mention.ban();
            const embed2 = new Discord.MessageEmbed()
            .setTitle(`:white_check_mark: Réussi! :white_check_mark:`)
            .setColor(`#FF0000`)
            .setDescription(mention.displayName + ' à été banni avec succès')
            .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
            return message.channel.send(embed2)
        }
        else{
        const embed3 = new Discord.MessageEmbed()
            .setTitle(`❌Erreur!❌`)
            .setColor(`#FF0000`)
            .setDescription('Impossible de bannir ce membre')
            .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
            return message.channel.send(embed3)
        }
    }
}

    module.exports.help = {
    name: 'ban',
    alias : ["Ban"],
    category: 'moderation',
    utility: 'permet de bannir un utilisateur du serveur',
    usage: "`.ban <@membre>`"
  };
