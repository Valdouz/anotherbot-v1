const Discord = require("discord.js");
const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (client, msg, args) => {
	if (msg.channel.nsfw === true) {
		superagent
			.get("https://nekobot.xyz/api/image")
			.query({ type: "ass" })
			.end((err, response, body) => {
				let embed = new discord.MessageEmbed()
					.setImage(response.body.message)
					.setColor("RANDOM")
					.setTitle("Ass :")
					.setFooter(`De AnotherBot pour ${message.author.username}`, message.author.displayAvatarURL());

				msg.channel.send(embed);
			});
	} else {
		const error = new Discord.MessageEmbed()
		.setTitle("Ce salon n'est pas __**NSFW**__ :underage: !")
         message.channel.send(error);
         message.react('💢');
	}
};

module.exports.help = {
	name: "ass"
};