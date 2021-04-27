module.exports = async (client, messageReaction, user) => {

    if(messageReaction.message.partial) await messageReaction.message.fetch()

    if(messageReaction.partial) await messageReaction.fetch()

    async function getMember(user, rule) {
        const channel = await user.client.channels.fetch(rule.channelId);
        return channel.guild.members.fetch(user);
    }

    function isValidMessageReactionAdd(messageReaction, user) {
        if (user.bot) return false;

        if (messageReaction.message.channel.type !== 'text') return false;

        return true;
    }

    const rules = require("../data/reactionRoles.json")

    if (!isValidMessageReactionAdd(messageReaction, user)) return console.log("invalid reaction");

  const rule = rules[messageReaction.message.id];
  if (!rule) return;

  const emojiKey =
    messageReaction.emoji[messageReaction.emoji.id ? 'id' : 'name'];
  const roleIdsToAdd = rule.emojiRoleMap.role[emojiKey];
  if (!roleIdsToAdd) return;

  const member = await getMember(user, rule);
  if (!member) return;

  //messageReaction.users.remove(user);

  if (roleIdsToAdd.every(roleId => member.roles.cache.has(roleId))) {
    return await member.roles.remove(roleIdsToAdd);
  }
};
