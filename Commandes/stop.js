const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const distube1 =require('distube')

module.exports.run = async(client, message, args) => {
    const distube = new distube1(client, { searchSongs: true, emitNewSongOnly: true });
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(message);

    if(queue) {
        client.distube.stop(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    }
}


module.exports.help = {
    name: 'stop',
    alias: ["st", "Stop", "St"],
    category: "music"
  };
