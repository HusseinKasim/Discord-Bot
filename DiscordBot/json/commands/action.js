module.exports = {

  name: 'action',
  description: 'action command',
  execute(message, args){
   
    {
      message.reply("You have 15 seconds to choose your next action.")
    message.react('⚔️')
      .then(() => message.react('💖'))
    
      const attackFilter = (reaction, user) => {
        return reaction.emoji.name === '⚔️' && user.id === message.author.id;
      }
      
      const collector1 = message.createReactionCollector(attackFilter, { time: 15000, max: 1, maxEmojis: 1 });
    
      collector1.on('collect', () => {
      message.channel.send(message.author.username + ", You have chosen to attack.")
      })
    
    
      const healFilter = (reaction, user) => {
        return reaction.emoji.name === '💖' && user.id === message.author.id;
      }
      
      const collector2 = message.createReactionCollector(healFilter, { time: 15000, max: 1, maxEmojis: 1 });
    
      collector2.on('collect', () => {
      message.channel.send(message.author.username + ", You have chosen to heal.")
    })
    }


  },
};