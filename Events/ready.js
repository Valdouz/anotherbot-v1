module.exports = async(client) => {
    let status_liste = [
        `🕊️`,
        `.help sur ${client.guilds.cache.size} serveurs`
      ]
    setInterval(function() {
    let st = status_liste[Math.floor(Math.random() * status_liste.length )]
    client.user.setActivity(st, { type: 'STREAMING', url: "https://www.twitch.tv/valdouz_" })
  
    }, 50000)
};