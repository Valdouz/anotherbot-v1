const db = require("quick.db")
const Discord = require('discord.js')
const fs = require("fs")
const reactionRoles = require("../data/reactionRoles.json")

module.exports = {
    help:{name: "reactionrole",
    alias: ["rr", "reaction-role"],
    category: "utility",},
    run: async (client, msg, args) => {
      if(!msg.guild.member(msg.author).hasPermission("MANAGE_GUILD")) return message.channel.send(":x: Vous n'avez pas la permission `MANAGE_GUILD`")
        if(args[0] == "create") {
            var emoji = "";
            let baseEmbed = new Discord.MessageEmbed()
                .setColor(client.invisible)
                .setDescription("**Configuration du role reaction**\n\nVeuillez mentionner le salon dans le quel se trouve le rôle réaction...")

            let message = await msg.channel.send(baseEmbed)

            var config = {}

            const filter = message => {
                return message.author.id == msg.author.id
            }

            let collector = msg.channel.createMessageCollector(filter, { time: 300000})

            let step = 1
            // 1 = salon
            // 2 = message ID
            // 3 = reaction
            // 4 = role
            collector.on("collect", m => {
                if(step == 1) {
                    m.delete()

                    /*var id = m.content.split(" ")[0]// <#706287671944675439>
                    id = id.split("#")[1] // [0] = < ; [1] = 706287671944675439>
                    id = id.split(">")[0] // 706287671944675439, >*/

                    var id = m.content.split(" ")[0]
                    id = id.split("#")[1]
                    id = id.split(">")[0]

                    let channel = message.guild.channels.cache.find(ch => ch.id == id)

                    if(!channel) return m.channel.send("Je n'ai trouvé aucun salon ! Essayez de le mentionner, ou de donner son ID.").then(mess => {
                        setTimeout(function() {mess.delete()}, 10000)
                    })

                    config.channel = id
                    step++
                    const step2 = "**Configuration du role reaction**\n\nSalon : {channel}\nVeuillez donner l'ID du message..."
                    let embedStep1 = new Discord.MessageEmbed()
                        .setColor(client.invisible)
                        .setDescription(step2.replace("{channel}", channel))


                    return message.edit(embedStep1)
                }

                if(step == 2) {
                    m.delete()

                    var id = m.content
                    console.log(m.content)
                    console.log(id)

                    let mesg = client.channels.cache.get(config.channel).messages.fetch(id)

                    if(!mesg) return msg.channel.send("Je n'ai trouvé aucun messages. Réessayez avec l'ID !").then(mess => {
                        setTimeout(function() {mess.delete()}, 10000)
                    })

                    config.msg = m.content
                    step++

                    const step3 = "**Configuration du role reaction**\n\nSalon : {channel}\nMessage : [ici]({message})\nVeuillez indiquer l'émoji..."
                    let embedStep2 = new Discord.MessageEmbed()
                        .setColor(client.invisible)
                        .setDescription(step3.replace("{channel}", `<#${config.channel}>`).replace("{message}", `https://discordapp.com/channels/${message.guild.id}/${config.channel}/${config.message}`))

                    return message.edit(embedStep2)
                }

                if(step == 3) {
                    m.delete()

                    emoji = m.content
                    if(emoji.startsWith("<") && emoji.endsWith(">")) {
                      //<:emojiName:IDIDIDID>
                      emoji = emoji.split(":")[2].split(">")[0]
                    }

                    console.log(emoji)

                    config.emoji = emoji
                    step++

                    const step4 = "**Configuration du rôle réaction**\n\nSalon : {channel}\nMessage : [ici]({message})\nEmoji : {emoji}\nVeuillez indiquer le rôle..."
                    let embedStep3 = new Discord.MessageEmbed()
                        .setColor(client.invisible)
                        .setDescription(step4.replace("{channel}", `<#${config.channel}>`).replace("{message}", `https://discordapp.com/channels/${message.guild.id}/${config.channel}/${config.message}`).replace("{emoji}", emoji))

                    return message.edit(embedStep3)
                }

                if(step == 4) {
                    m.delete()

                    var role = m.mentions.roles.first()

                    if(!role) {
                        let roleName = message.content

                        role = m.guild.roles.cache.find(r => r.id == roleName || r.name.starWith(roleName) || r.name.includes(roleName))

                        if(!role) return msg.channel.send(lang.rolereact.noRole).then(mess => {
                            setTimeout(function() {mess.delete()}, 10000)
                        })
                    }

                    config.role = role.id

                    const final = "**Rôle réaction créé :**\n\nSalon : {channel}\nMessage : [ici]({message})\nEmoji : {emoji}\nRole : {role}"
                    let embedEnd = new Discord.MessageEmbed()
                        .setColor(client.invisible)
                        .setDescription(final.replace("{channel}", `<#${config.channel}>`).replace("{message}", `https://discordapp.com/channels/${message.guild.id}/${config.channel}/${config.message}`).replace("{emoji}", emoji).replace("{role}", `<@&${role.id}>`))

                    collector.stop()

                    var emoji = {

                    }

                    function createEmojiVar(emote, id) {
                        return emote = [id]
                    }

                    var emoji = []

                    emoji.push(config.emoji)

                    var role = {}

                    role[emoji[0]] = [config.role]

                    if(reactionRoles[config.msg]) {
                        reactionRoles[config.msg].emojiRoleMap.role[emoji[0]] = [config.role]
                    } else {
                        reactionRoles[config.msg] = {
                            channelId: config.channel,
                            isUnique: false,
                            emojiRoleMap:{
                                role
                            }
                        }
                    }


                    console.log(reactionRoles[config.message])

                    let channel = client.channels.cache.get(config.channel)

                    let rrMsg = channel.messages.cache.get(config.msg)

                    try {
                        rrMsg.react(config.emoji)
                    } catch (e) {
                        console.log(e)
                    }

                    fs.writeFile("../data/reactionRoles.json", JSON.stringify(reactionRoles), (err) => {
                        if(err) console.log(err)
                    });

                    return message.edit(embedEnd)
                }
            })
        }
    }
}

