const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db')



module.exports = {
  name: 'buyhulk',
  description: 'buy hulk command',
 async execute(message, args){

    const embed = new Discord.MessageEmbed()
    embed.setTitle('Do you want to buy Hulk?')
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
                let insertdata = db.prepare('INSERT INTO usercards VALUES (?,?,?);')
                insertdata.run(message.author.id, 3,'Hulk')
                insertdata.finalize()
                message.channel.send("You have just bought Hulk!")
            } 
        });
    }
}