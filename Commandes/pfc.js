const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

         
const pfc = [
    "feuilles",
    "pierre",
    "ciseaux"
]

const result = Math.floor(Math.random() * Math.floor(pfc.length))

message.channel.send(pfc[result])

if(pfc[result] == args[0]) {
    message.channel.send("Égalité !")
}

if(args[0] == "ciseaux" && pfc[result] == "pierre") {
    message.channel.send("Tu as perdu !")
}

if(args[0] == "ciseaux" && pfc[result] == "feuille") {
    message.channel.send("Tu as gagné !")
}

if(args[0] == "feuille" && pfc[result] == "pierre") {
    message.channel.send("Tu as gagné !")
}

}
module.exports.help = {
    name: 'pfc',
  };