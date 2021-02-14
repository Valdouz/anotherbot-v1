const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

if(message.author.id !== "748103597098795059") return message.channel.send("Permissions insuffisantes !")
let msg = args.join(" ")
if(!msg) return message.channel.send("Je ne sais pas ce que je dois dire !")
    const embed = new Discord.MessageEmbed()
    .setColor("#FFC0CB")
    .setDescription(msg)
    message.delete()
    message.channel.send(embed);
}

module.exports.help = {
    name: 'say-embed',
    alias: ["se", "saye", "sayembed", "Say-embed", "Sayembed", "Saye", "Se"]
}; 
