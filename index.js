const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {TOKEN, PREFIX} = require("./config.js");
const DisTube = require('distube')
const { CommandoClient } = require("discord.js-commando");
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
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
