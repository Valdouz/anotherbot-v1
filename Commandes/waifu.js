const Discord = require ('discord.js')
const superagent = require('superagent');
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {

        if (!message.channel.nsfw) {
         const embed = new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ :underage: !")
         message.channel.send(embed);
         message.react('💢');
        console.log(0) } else {
        
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/waifu");
    
        const embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(body.url)
            console.log("retour de body", body);
        return message.channel.send(embed2)
console.log(1)
        }
 
}

module.exports.help = {
    name: 'waifu',
    category: 'nsfw',
    utility: "envoie une image aléatoire de waifu."
}