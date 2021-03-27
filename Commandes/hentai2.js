const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	if (message.channel.nsfw === true) {
		const { body } = await superagent.get(
			"https://nekos.life/api/v2/img/hentai"
		);

		const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle(`Hentai :`)
			.setImage(body.url)
		message.channel.send({ embed });
	} else {
		const error = new Discord.MessageEmbed()
		.setTitle("Ce salon n'est pas __**NSFW**__ :underage: !")
		message.channel.send(error);
         message.react('💢');
	}
};

module.exports.help = {
	name: "hentai2"
};