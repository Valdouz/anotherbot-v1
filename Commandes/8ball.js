const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const moment = require("moment");

module.exports.run = async(client, message, args) => {
    
    ballrep = ["Oui",
"Non",
 "Sûrement",
 "Peut-être",
 "Probablement",
 "Probablement pas",
]

let usr = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let rep = ballrep[Math.floor(Math.random() * ballrep.length)];
let text = args.join(" ");

const embed = new Discord.MessageEmbed()

.setTimestamp()
.setTitle("__**8ball Question**__ : *" +  text + "*")
.setThumbnail(usr.user.displayAvatarURL({dynamic : true}))
.setDescription(rep)
.setColor("RANDOM")
.setFooter(`De AnotherBot pour ${message.author.username}`, message.author.displayAvatarURL())


await message.channel.send(embed)
}

module.exports.help = {
    name: '8ball',
}