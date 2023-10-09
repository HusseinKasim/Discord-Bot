const Discord = require("discord.js")


module.exports = {
  name: 'buythor',
  description: 'buy thor command',
 async execute(message, args){

    const embed = new Discord.MessageEmbed()
    embed.setTitle('Do you want to buy Thor?')
    embed.setDescription("Click on the 💰 to buy.")
    embed.setColor(0xff0000)


        let msg = await message.channel.send(embed);
        await msg.react('💰');
    
    
        const buyFilter = (reaction, user) => {
            return reaction.emoji.name === '💰' && user.id === message.author.id && !user.bot;
        }
    
        const buyCollector = msg.createReactionCollector(buyFilter, {
            time: 60000,
            max: 1
        });
    
    
        buyCollector.on('collect', async (reaction, user) => {
            if (reaction.emoji.name === '💰') {
                message.channel.send("You have just bought Thor!")
            } 
        });
    }
}