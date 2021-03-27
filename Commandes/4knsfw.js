const Discord = require("discord.js");
const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (client, msg, args) => {
	if (msg.channel.nsfw === true) {
		superagent
			.get("https://nekobot.xyz/api/image")
			.query({ type: "4k" })
			.end((err, response, body) => {
				let embed = new discord.MessageEmbed()
					.setImage(response.body.message)
					.setColor("RANDOM")
					.setTitle("4k:")
					.setFooter(`De AnotherBot pour ${msg.author.username}`, msg.author.displayAvatarURL());

				msg.channel.send(embed);
			});
	} else {
		const error = new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ :underage: !")
         msg.channel.send(error);
         msg.react('💢');

	}
};

module.exports.help = {
	name: "4k"
};