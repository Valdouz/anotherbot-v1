const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {


const pfc = [
    "feuilles",
    "pierre",
    "ciseaux"
]

const result = Math.floor(Math.random() * Math.floor(pfc.length))

if(args[0]) {
    if(args[0] !== "feuille" || args[0] !== "pierre" || args[0] !== "ciseaux") {
        if(pfc[result] == args[0]) {
            message.channel.send(`Égalité ! ${pfc[result]}`)
        }

        if(args[0] == "ciseaux" && pfc[result] == "pierre") {
            message.channel.send(`${pfc[result]}, Tu as perdu !`)
        }

        if(args[0] == "ciseaux" && pfc[result] == "feuille") {
            message.channel.send(`${pfc[result]}, Tu as gagné !`)
        }

        if(args[0] == "feuille" && pfc[result] == "pierre") {
            message.channel.send(`${pfc[result]}, Tu as gagné !`)
        }
  } else {
      return;
  }
} else {
    return;
}

}
module.exports.help = {
    name: 'pfc',
  };
