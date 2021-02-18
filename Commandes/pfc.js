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
        var choix;
        if(args[0] === "feuille") choix = 1
        if(args[0] === "pierre") choix = 2
        if(args[0] === "ciseaux") choix = 3
        switch(choix) {
            1:
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
            2:
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
            3:
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
