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

/*const Discord = require('discord.js')

module.exports = {
  help:{
    name:'help',
    alias: ['h'],
    utility:'Permet de voir la liste des commandes disponibles',
    category: 'informations'
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

    text+=`\n\n:musical_note: **Musique :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'music') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })
    console.log(text)

text+=`\n\n:shield: **Protection :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'automod') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })
    console.log(text)

text+=`\n\n:information_source: **Informations :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'informations') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })
    console.log(text)

    text+=`\n\n:under_age: **NSFW :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'nsfw') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })
    console.log(text)

    text+=`\n\n:closed_lock_with_key: **Privé :**`
    client.commands.forEach(command => {
      if (!command.help || !command.help.category || !command.help.name) return;
      if (command.help.category.toLowerCase() !== 'private') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility || "*Non defini*"}`
    })
    console.log(text)
    
    message.channel.send(
      new Discord.MessageEmbed().setColor('RANDOM').setDescription(text)
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
}*/

const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
        const moderation = new Discord.MessageEmbed()

        .setColor('fb5b39')
        .setTitle(':tools: Moderation :')
        .addField('`ban`', 'Permet de bannir un utilisateur du serveur')
        .addField('`kick`', "Permet d'expulser un membre du serveur")
        .addField('`clear`', "Permet d'effacer des messages en masse dans le salon")
        .addField('`captcha`', 'Configure le captcha')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());

        const fun = new Discord.MessageEmbed()

        .setColor('19e45a')
        .setTitle(':fire: Fun :')
        .addField('`avatar`', "Permet d'afficher la photo de profil de quelqu'un.")
        .addField('`cat`', "Envoie une image aléatoire de chat")
        .addField('`dog`', "Envoie une photo aléatoire de chien")
        .addField('`nitro`', "Envoie un faux nitro")
        .addField('`ping`', "Envoie un gif enervé d'un ping")
        .addField('`8ball`', 'Répond a une question')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());
        
        const musique = new Discord.MessageEmbed()
        
        .setColor('19b0e4')
        .setTitle(':musical_note: Musique :')
        .addField('`play`', 'Permet de connecter le bot et commencer la musique')
        .addField('`skip`', 'Permet de passer la musique')
        .addField('`stop`', 'Permet de connecter stopper la musique.')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());

        const informations = new Discord.MessageEmbed()
 
        .setColor('1246bf')
        .setTitle(':information_source: Informations :')
        .addField('`help`', "Permet de voir la liste des commandes disponibles")
        .addField('`ms`', "Permet d'afficher la latence du bot")
        .addField('`rank`', "Permet de voir son niveau")
        .addField('`server-info`', "Permet d'obtenir diverses informations concernant le serveur")
        .addField('`botinfo`', 'Permet d\'obtenir diverses informations concernant le bot')
        .addField('`userinfo`', 'Permet d\'obtenir diverses informations concernant un utilisateur')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());

        const nsfw = new Discord.MessageEmbed()
        .setTitle(':underage: NSFW :')
        .setColor('RED')
        .addField('`hentai`', "Envoie une image aléatoire de hentai")
        .addField('`hentai-gif`', "Envoie un gif aléatoire de hentai.")
        .addField('`waifu`', "Envoie une image aléatoire de waifu")
        .addField('`wallpaper`', "Envoie un fond d\'écran aléatoire")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());

        const privé = new Discord.MessageEmbed()
        
        .setColor('765624')
        .setTitle(':closed_lock_with_key: Privé :')
        .addField('`eval`', "Permet d'executer du code javascript")
        .addField('`recharge`', "Permet de recharger une commande sans relancer le bot")
        .addField('`say`', "Permet de faire envoyer un message par le bot")
        .addField('`say-embed`', "Permet d'envoyer un message avec le bot mais avec un embed de couleur aléatoire")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL());
       
        const pages = [
                moderation,
                fun,
                musique,
                informations,
                nsfw,
                privé
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }

  module.exports.help = {
      name: 'help',
      alias: ["h"]
  };
