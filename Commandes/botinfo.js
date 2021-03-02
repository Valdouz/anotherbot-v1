const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')
const moment = require("moment");



exports.run = (client, message) => {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .setTimestamp()
    .addFields(
        { name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true},
        { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
        { name: 'Serveurs', value: `${client.guilds.cache.size.toString()}`, inline: true},
        { name: 'Salons', value: `${client.channels.cache.size.toString()}`, inline: true},
        { name: 'Utilisateurs', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
        { name: 'Version', value: `discord.js@12.5.1`, inline: true},
        { name: 'Site', value: `[Github](https://github.com/valdouz/anotherbot/)`, inline: true},
        { name: 'Site', value: `[Site](https://anotherbot.tk/)`, inline: true},
        { name: 'Support', value: `[Invitation](https://discord.gg/SUsNUyusNn)`, inline: true},
    )
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())

    
    message.channel.send(embed)
}

module.exports.help = {
    name: 'botinfo',
    alias: ["bot-info"],
    category: 'informations',
    utility: 'Permet d\'obtenir diverses informations concernant le bot'
}