//const
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')


//structure de command handler
module.exports.run = async(client, message, args) => {
//embeds
const error = new MessageEmbed()
.setTitle(`❌Erreur!❌`)
.setColor(`#FF0000`)
.setDescription(`<@${message.author.id}>, Tu n'as pas les permissions requises!`)
.setTimestamp();
const error2 = new MessageEmbed()
.setTitle(`❌Erreur!❌`)
.setColor(`#FF0000`)
.setDescription(`<@${message.author.id}>, merci d'entrer un nombre compris entre 1 et 100!`)
.setTimestamp();
const error3 = new MessageEmbed()
.setTitle(`❌Erreur!❌`)
.setColor(`#FF0000`)
.setDescription(`Aucun message a supprimer sur cet utilisateur (ou l'utilisateur indiquer na pas été trouver.)`)
.setTimestamp();
const Réussite = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setColor("#dc143c")
.setDescription(`**Action**: clear\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
    
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {
        message.channel.send(error) 
    } 
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.channel.send(error2);

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    message.delete();
    await message.channel.bulkDelete(messages);

    messages.length = Math.min(args[1], messages.length)

    if (messages.length === 0 || !user) return message.channel.send(error3)
    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);

    message.channel.send(Réussite).then(msg => { setTimeout(function() { msg.delete()}, 10000 )});
//fin de la structure 
}

//exportation de la commande pour le nom (et l'ancien help)
module.exports.help = {
    name: 'prune',
    alias: [""],
}



        
        
        