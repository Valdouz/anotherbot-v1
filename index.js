const Discord = require('discord.js');
let client = new Discord.Client({ partials: ["REACTION", "MESSAGE"]})
const fs = require('fs');
const {TOKEN, PREFIX} = require("./config.js");
const DisTube = require('distube')
const { CommandoClient } = require("discord.js-commando");
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Lecutre de \`${song.name}\` en cours - \`${song.formattedDuration}\`\nDemander par: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Ajout de ${song.name} - \`${song.formattedDuration}\` par ${song.user}`
    ))

client.login(TOKEN);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);

  if(commande.help.alias) {
    commande.help.alias.forEach((alias) => {
      client.aliases.set(alias, commande)
      console.log(`| --> alias ${alias} de la commande ${commande.help.name} chargé !`)
    })
  }

})

  });

client.functions = require("./function.js")

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    console.log(`${f} chargé !`)
  });

});

client.on('ready', () => {
    console.log('Prêt et connecté sur ' + client.user.tag + ' !')
})
