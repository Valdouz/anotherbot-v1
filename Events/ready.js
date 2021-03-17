module.exports = async(client) => {
    let status_liste = [
        `.help`,
        `{client.guilds.cache.size} serveurs`
      ]
    setInterval(function() {
    let st = status_liste[Math.floor(Math.random() * status_liste.length )]
    client.user.setActivity(st, { type: 'STREAMING', url: "https://www.twitch.tv/valdouz_" })
  client.channels.cache.get("810281784846712913").send(`**${client.user.tag} viens de démarrer !** :white_check_mark:`);
    }, 50000)
};
