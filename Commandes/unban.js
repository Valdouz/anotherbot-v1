const Discord = require("discord.js");
module.exports.run = async(client, msg, args) => {

        const userperm = new Discord.MessageEmbed()
        .setTitle(`❌Erreur!❌`)
        .setColor(`#FF0000`)
        .setDescription("Vous n'avez pas la permission `BAN_MEMBERS`")
        const botperm = new Discord.MessageEmbed()
        .setTitle(`❌Erreur!❌`)
        .setColor(`#FF0000`)
        .setDescription("Le bot n'as pas la permission `BAN_MEMBERS`")
        const unban = new Discord.MessageEmbed()
        .setTitle(`✅Réussi✅`)
        .setColor(`GREEN`)
        .setDescription(`La personne est débanni`)

        if(!msg.member.hasPermission("BAN_MEMBERS")) {
                return msg.channel.send(userperm)
              }
              
              if(!msg.guild.me.hasPermission("BAN_MEMBERS")) {
                return msg.channel.send(botperm)
              }
              
              let userID = args[0]
                msg.guild.fetchBans().then(bans=> {
                if(bans.size == 0) return 
                let bUser = bans.find(b => b.user.id == userID)
                if(!bUser) return
                msg.guild.members.unban(bUser.user)
                msg.channel.send(unban)
          })
              
}
module.exports.help = {
        name: 'unban',
      };
    