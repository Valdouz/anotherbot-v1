const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {


const pfc = [
    "feuille",
    "pierre",
    "ciseaux"
]

const result = Math.floor(Math.random() * Math.floor(pfc.length))

if(args[0]) {
    if(args[0] === "feuille" || args[0] === "pierre" || args[0] === "ciseaux") {
        switch(args[0]) {
            "feuille":
                switch(result) {
                    1:
                        message.channel.send("Mon choix : feuille. Égalité !")
                        break;
                    2:
                        message.channel.send("Mon choix : pierre. Tu as gagné !")
                        break;
                    3:
                        message.channel.send("Mon choix : ciseaux. Tu as perdu !")
                        break;
                }
                break;
            "pierre":
                switch(result) {
                    1:
                        message.channel.send("Mon choix : feuille. Tu as perdu !")
                        break;
                    2:
                        message.channel.send("Mon choix : pierre. Égalité !")
                        break;
                    3:
                        message.channel.send("Mon choix : ciseaux. Tu as gagné !")
                        break;
                }
                break;
            "ciseaux":
                switch(result) {
                    1:
                        message.channel.send("Mon choix : feuille. Tu as gagné !")
                        break;
                    2:
                        message.channel.send("Mon choix : pierre. Tu as perdu !")
                        break;
                    3:
                        message.channel.send("Mon choix : ciseaux. Égalité !")
                        break;
                }
        }
  } else {
      message.channel.send("Type d'objet invalide !")
  }
} else {
    message.channel.send("Aucun objet précisé !")
}

}
module.exports.help = {
    name: 'pfc',
  };
