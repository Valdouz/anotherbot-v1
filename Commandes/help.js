// const Discord = require("discord.js");
//  const {PREFIX} = require("../config.js");
//
// module.exports.run = (client, message, args) => {
// const embed = new Discord.MessageEmbed()
//
// .setTimestamp()
// .setColor('#FFC0CB')
// .setTitle('Liste des commandes ')
// .setDescription(":fire: **Fun:**\n`avatar` : permet d'afficher la photo de profil de quelqu'un.\n`ping` : affiche le ping.\n`test` : commande de test.\n\n:tools: **Moderation**\n`kick` : permet de kick un utilisateur.\n`ban` : permet de ban un utilisateur.\n`clear` : Permet de clear un nombre de messages entre 1 et 100\n\n:round_pushpin: **Le prefix est : `.`**")
// .setFooter("De AnotherBot pour " + message.author.username,
// message.author.displayAvatarURL());
//
// return message.channel.send(embed) }
//
//  module.exports.help = {
//      name: 'help',
//      alias: ["h"]
//  };

const Discord = require('discord.js')

module.exports = {
  help:{
    name:'help',
    alias: ['h'],
    utility:'Permet de voir la liste des commandes disponibles',
    category: ''
  },
  run: async (client, message, args) => {
   if(!args[0]) {
    let text = '';

    text+=':fire: **Fun :**';
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'fun') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })

    text+=`\n\n:tools: **Moderation :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'moderation') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })

    console.log(text)

    message.channel.send(
      new Discord.MessageEmbed().setColor('#FFC0CB').setDescription(text)
    )
  }
 else {
  let commande = client.commands.get(args[0].toLowerCase())
  if(!commande) return message.channel.send("Commande inexistante !")
  let embed = new Discord.MessageEmbed()
  .setTitle(`Aide de la commande \`${commande.help.name}\` :`)
  .addField("Usage :", commande.help.usage || "Aucun usage défini")
  .addField("Description :", commande.help.utility || "Aucune description définie")
  .addField("Catégorie :", commande.help.category || "Aucune catégorie précisée")
  .setColor("RANDOM")
  message.channel.send(embed)
 }
}
}
