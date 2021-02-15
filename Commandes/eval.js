const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message) => {
	
    if (member.id === config.OWNER) {
      const result = eval(content.replace('.eval ', ''))
      channel.send(result)
    }
}

module.exports.help = {
    name: 'eval',
}
