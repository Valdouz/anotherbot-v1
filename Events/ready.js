const { Message } = require("discord.js");
const config = require("../config.js");
module.exports = async(client) => {
    let status_liste = [
        `.help`,
        `${client.guilds.cache.size} serveurs`
      ]
    setInterval(function() {
    let st = status_liste[Math.floor(Math.random() * status_liste.length )]
    client.user.setActivity(st, { type: 'STREAMING', url: "https://www.twitch.tv/valdouz_" })
    client.channels.cache.get(config.STARTCHANNEL).send(`:white_check_mark: | ${client.user.tag} viens de démarrer !`);
    }, 50000)
};
