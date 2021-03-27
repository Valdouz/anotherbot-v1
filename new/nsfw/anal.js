const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (client, msg, args) => {
	if (msg.channel.nsfw === true) {
		superagent
			.get("https://nekobot.xyz/api/image")
			.query({ type: "anal" })
			.end((err, response, body) => {
				let emb = new discord.MessageEmbed()
					.setImage(response.body.message)
					.setColor("#00ff00")
					.setTitle("Anal here")
					.setFooter(
						`NaZeRy『Beta』 | This command requested by ${msg.author.username}#${msg.author.discriminator}`
					);

				msg.channel.send(emb);
			});
	} else {
		const error = new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ :underage: !")
         message.channel.send(error);
         message.react('💢');
	}
};

module.exports.help = {
	name: "anal",
	description:
		"This command is used for calling NSFW images API to send them, but NSFW channel needed.",
	usage: "d!anal",
	accessablechannel: "NSFW Channel",
	accessableby: "NSFW/Member",
	aliases: [],
};