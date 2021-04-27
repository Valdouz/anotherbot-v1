module.exports = async(client, messageReaction, user) => {
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

    const rules = require("./data/reactionRoles.json")

    if (!isValidMessageReactionAdd(messageReaction, user)) return;

  const rule = rules[messageReaction.message.id];
  if (!rule) return;

  const emojiKey =
    messageReaction.emoji[messageReaction.emoji.id ? 'id' : 'name'];
  const roleIdsToAdd = rule.emojiRoleMap.role[emojiKey];
  if (!roleIdsToAdd) return;

  const member = await getMember(user, rule);
  if (!member) return;

  if (!rule.isUnique) {
    return await member.roles.add(roleIdsToAdd);
  }

  const currentRoleIds = member.roles.cache.map(role => role.id);
  const roleIdsToRemove = [...new Set(Object.values(rule.emojiRoleMap).flat())];
  const roleIdsToSet = [
    ...currentRoleIds.filter(roleId => !roleIdsToRemove.includes(roleId)),
    ...roleIdsToAdd
  ];

return await member.roles.set(roleIdsToSet);
};
