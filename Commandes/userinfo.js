const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const moment = require("moment");

exports.run = (client, message, args) => {
        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
       } else {
            user = message.author;
        }
        if(user.presence.status === 'dnd') {
            statut = 'Ne Pas Déranger'
        } else if(user.presence.status === 'online') {
            statut = 'En Ligne'
        } else if(user.presence.status === 'offline') {
            statut = 'Hors Ligne (ou Invisisble)'
        }else if(user.presence.status === 'idle') {
            statut = 'Inactif (ou "AFK")'
        }
        
        const member = message.guild.member(user);
        const moment = require('moment');
        
        if(message.bot === 'true') {
            robot = 'Oui'
        } else {
            robot = 'Non'
        }

       
    const embed = new Discord.MessageEmbed()
    

    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL)
    .setDescription(`L'utilisateur **${user.username}** aka **${member.nickname ? member.nickname : 'rien'}** a rejoint le ${moment.utc(member.joinedAt).format(`DD/MM/YYYY [|] HH:mm`)}`)
    .addField(`Nom :`,` ${user.tag}`)
    .addField(`Bot : `, `${robot}`)
    .addField('Joue a :', `${user.presence.game ? user.presence.game.name : 'Rien'}`, false)
    .addField(`Crée le :`, `${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}`)
    .addField(`Statut :`, `${statut}`)
    .addField(`${user.username} possède les rôles suivants:`,`${member.roles.cache.map(roles => roles.name).join(', ')}`)
    console.log(user)
    message.channel.send(embed);
}


module.exports.help = {
    name: 'userinfo',
    alias: ["utilisateur-info"],
}