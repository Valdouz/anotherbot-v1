const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const axios = require("axios")
module.exports.run = async(client, message, args) => {
const url = "https://some-random-api.ml/img/dog";
const facts = "https://some-random-api.ml/facts/dog"

let image, response;
let fact, responses;
try {
    response = await axios.get(url);
    image = response.data;

    responses = await axios.get(facts)
    fact = responses.data

} catch (e) {
    return message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Une erreur s'est produite !`)
    .setImage("https://thumbs.gfycat.com/ActualThoughtfulDwarfmongoose-size_restricted.gif") )
}

message.channel.send(new Discord.MessageEmbed()
    .setColor(`#f3f3f3`)
    .setImage(image.link)

)
},
module.exports.help = {
    name: 'dog',
    category: "fun",
    utility: "Envoie une photo aléatoire de chien"
  };