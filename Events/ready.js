module.exports = async(client, data) => {
    client.user.setActivity(`.help`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/valdouz_"
      });
}