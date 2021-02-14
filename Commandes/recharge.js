const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(message.author.id !== "748103597098795059") return message.channel.send(":x: **Vous n'avez pas les permissions suffisantes pour exécuter cette commande !**")
    if(!args[0]) return message.channel.send(":x: **Vous devez fournir la commande à recharger !**\n`.recharge <nom de la commande>`")
    let msg = await message.channel.send("Rechargement de la commande " + args[0] + "...")
    try {
        let commande = client.commands.get(args[0])
        client.commands.delete(commande.help.name)
        console.log(`commande ${commande.help.name + ".js"} déchargé !`)
        if(commande.help.alias) {
                if(commande.help.alias.length > 1) {
                    commande.help.alias.forEach((alias) => {
                    client.commands.delete(alias)
                    console.log(`| --> alias ${alias} de la commande ${commande.help.name} déchargé !`)
                })
            }
            else {
                client.commands.delete(commande.help.alias[0])
                console.log(`| --> alias ${commande.help.alias} de la commande ${commande.help.name} déchargé !`)
            }
        }
        client.commands.set(commande.help.name, commande)
        console.log(`commande ${commande.help.name + ".js"} chargé !`)
        if(commande.help.alias) {
                if(commande.help.alias.length > 1) {
                    commande.help.alias.forEach((alias) => {
                    client.commands.set(alias, commande)
                    console.log(`| --> alias ${alias} de la commande ${commande.help.name} chargé !`)
                })
            }
            else {
                client.commands.set(commande.help.alias[0], commande)
                console.log(`| --> alias ${commande.help.alias} de la commande ${commande.help.name} chargé !`)
            }
        }
        msg.edit(":white_check_mark: **Commande** " + args[0] + " **rechargé !**")
    }
    catch(err) {
        msg.edit(":x: **Erreur lors du rechargement de la commande : ```xl\n" + err + "\n```")
    }
};

module.exports.help = {
    name: "recharge"
}