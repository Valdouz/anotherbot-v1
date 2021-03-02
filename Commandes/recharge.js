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
        let ncommande = require("./" + args[0] + ".js")
        client.commands.set(ncommande.help.name, commande)
        console.log(`commande ${ncommande.help.name + ".js"} chargé !`)
        if(ncommande.help.alias) {
                if(ncommande.help.alias.length > 1) {
                    ncommande.help.alias.forEach((alias) => {
                    client.ncommands.set(alias, commande)
                    console.log(`| --> alias ${alias} de la commande ${ncommande.help.name} chargé !`)
                })
            }
            else {
                client.commands.set(ncommande.help.alias[0], commande)
                console.log(`| --> alias ${ncommande.help.alias} de la commande ${ncommande.help.name} chargé !`)
            }
        }
        msg.edit(":white_check_mark: **Commande** " + args[0] + " **rechargé !**")
    }
    catch(err) {
        msg.edit(":x: **Erreur lors du rechargement de la commande : ```xl\n" + err + "\n```")
    }
};

module.exports.help = {
    name: "recharge",
    category: "private",
    utility: "Permet de recharger une commande sans relancer le bot"
}