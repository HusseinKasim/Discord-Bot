const Discord = require("discord.js")


module.exports = {
  name: 'buydrax',
  description: 'buy drax command',
 async execute(message, args){

    const embed = new Discord.MessageEmbed()
    embed.setTitle('Do you want to buy Drax?')
    embed.setColor(0xff0000)
    embed.setDescription("Click on the 💰 to buy.")

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
                message.channel.send("You have just bought Drax!")
            } 
        });
    }
}