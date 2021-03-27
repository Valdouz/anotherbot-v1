module.exports.play = async (client, guild) => {
    let queue = client.queue
  
    let guildQueue = queue.get(guild.id)
  
    let song = guildQueue.songs[0];
    if (!song) {
      guildQueue.channel.leave()
      client.queue.delete(guild.id)
      guildQueue.updateChannel.send(
        new Discord.MessageEmbed()
          .setColor('1a356f')
          .setDescription(':clipboard: | La liste de lecture est terminée, pour jouer a nouveau, utilisez la commande `play` !')
      )
      return;
    }
  
    const player = guildQueue.connection.play(ytdl(song.url)).on('finish', () => {
      if (guildQueue.loop) guildQueue.songs.push(guildQueue.songs[0])
      guildQueue.songs.shift();
      client.functions.play(client, guild)
    })
  
    guildQueue.player = player
  
    player.setVolumeLogarithmic(guildQueue.volume);
    guildQueue.updateChannel.send(
      new Discord.MessageEmbed()
        .setColor('1a356f')
        .setDescription(`:musical_note: | \`${song.title}\` est maintenant entrain d'être joué !`)
    )
  }
  
  module.exports.stop = async (client, guild) => {
    let guildQueue = client.queue.get(guild.id);
  
    guildQueue.songs = [];
    client.queue.set(guild.id, guildQueue);
  
    guildQueue.channel.leave()
  
    guildQueue.connection.dispatcher.end()
  }
  
  module.exports.skip = async (client, guild) => {
    let guildQueue = client.queue.get(guild.id);
    guildQueue.connection.dispatcher.end()
  }
  
  