
const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

const ping = new MessageEmbed()

.setTitle(`() Ping en cours...`)
.setColor('#c215e9')
.setDescription(`**:ping_pong: Pong!\nLa latence est de : \`${Math.round(client.ws.ping)}ms\`. **`)
.setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL());

message.channel.send(ping);
}


module.exports.help = {
  name:  "ms",
  alias: ["ms"],
  category: 'informations',
  utility: 'permet d\'afficher la latence du bot'
}
