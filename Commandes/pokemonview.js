const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = (client, message, args) => {
    
    if(args[0] === "info") {
        let name = args.slice(1).join(' ')
        if(!name) return message.reply("Veuillez préciser un id")
        var url = "https://pokeapi.co/api/v2/pokemon-form/" + name
        fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => {
    if(json === "not found") return message.reply("Ce pokémon n'a pas été trouvé")
        console.log(json)
    
    
    let embed = new Discord.MessageEmbed()
    .setColor("CCFFFF")
    .setTitle("Pokemon Forms")
    .addField("ID :", json.id)
    .addField("Name :", json.pokemon.name)
    .addField("Order :", json.order)
    .addField("Form Name :", json.form_name)
    .setThumbnail(json.pokemon.url)
    message.channel.send(embed)
    })
    }
}

module.exports.help = {
    name: 'testpok'
}