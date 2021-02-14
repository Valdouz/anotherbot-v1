const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const distube = require('distube')

module.exports.run = async(client, message, args) => {
    
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.')

    let queue = await client.distube.getQueue(message);

    if(queue) {
        client.distube.skip(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    }
}


module.exports.help = {
    name: 'skip',
    alias: ["s", "S", "sk", "Skip", "Sk", "SK", "zap"],
    category: "music"
  };
