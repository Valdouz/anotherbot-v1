const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
    message.channel.send("https://media.discordapp.net/attachments/754432290741813298/759383589149999134/6e607a308d582566cad5ec59fc78ea10xedy9ugkqo621.png")
}
module.exports.help = {
    name: 'nitro',
    category: "fun",
    utility: "Envoie un faux nitro"
  }