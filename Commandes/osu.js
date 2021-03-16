const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("d6dfc7b0d58cc15952db5e992590d392def0ad53" , {
    notFoundAsError: true,
    completeScores: false 
})


module.exports.run = async(client, message, args) => {
//command

let username = args[0]
  
const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`❌Erreur!❌`)
    .setDescription('Merci de donner un pseudo valide')
    .addField('Se crée un compte :', `[Site d'osu!](https://osu.ppy.sh/home)`)


if (!args[0]) return message.channel.send(embed)

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle(`Information de ${user.name} :`)
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor("#D0436A")
.addField('Nickname', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Rank', user.pp.rank)
.addField('Level', Math.round(user.level))
.addField('Country', user.country)
.addField('Country Rank', user.pp.countryRank)
.addField('Playcount', user.counts.plays)
.addField('Accuracy', `${user.accuracyFormatted}`)
.setTimestamp()
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(osu)

})

}

module.exports.help = {
    name: 'osu',
};