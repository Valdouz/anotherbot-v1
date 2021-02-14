const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')
const moment = require("moment");



exports.run = (client, message) => {
    const guild = message.guild;

    const embed = new Discord.MessageEmbed()
    .setColor("#FFC0CB")
    .setThumbnail(guild.iconURL())
    .addField(`Plus d'informations à propos de : **${guild.name}**`,
    `• ID: ${guild.id}
    •Chef : ${guild.owner.user.tag} (${guild.ownerID})
    •Roles: ${guild.roles.cache.size}
    •Crée le ${moment(guild.createdAT).format('DD/MM/YYYY')}
    `)
    .setDescription(`${message.author.id === message.guild.owner.id ?  "Votre serveur" :  "Ce serveur"} possède ${guild.channels.cache.filter(ch => ch.type === "text").size}, salons textuels et ${guild.channels.cache.filter(ch => ch.type === "voice").size} salons vocaux avec ${guild.memberCount -1} membres.`)
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
      message.channel.send(embed)

}

module.exports.help = {
    name: 'server-info',
    alias: ["serveur-info"],
    category: 'fun',
    utility: 'permet d\'obtenir diverses informations concernant le serveur'
}
