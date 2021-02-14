const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const distude =require('distube')

module.exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send(":x: Aucune musique précisée !")
    const music = args.join(" ");
    if(!message.member.voice) return message.channel.send(":x: Vous n'êtes pas en vocal !")
    client.distube.play(message, music)
    message.channel.send(":white_check_mark: Musique en cours de lecture !")
    
}

module.exports.help = {
    name: 'play',
    alias: ["p", "mp", "pm", "Play", "P", "Mp", "Pm"],
    category: "music"
  };
