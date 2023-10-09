const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db')


module.exports = {
  name: 'buycaptainamerica',
  description: 'buy captain america command',
 async execute(message, args){

         const embed = new Discord.MessageEmbed()
         embed.setTitle("Do you want to buy Captain America?")
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

        var balance = 0
        var price = 0
        var check = 0
    
    function priceCallback(row){
        return row.cardPrice
       }

   
    function balanceCallback(row){
        return row.balance
    }

    

 buyCollector.on('collect', async (reaction, user) => {
   if (reaction.emoji.name === '💰') {
     await db.get('SELECT * FROM usercards WHERE cardID = 1 AND userID = ?;',[message.author.id], async function(err, row) {
              await db.get('SELECT balance FROM users WHERE userID = ?;', [message.author.id], async function(err, row) {
                   balance = balanceCallback(row);            
                     if(balance >= price){
                        var newBalance = balance - price
                        await db.run('UPDATE users SET balance = ? WHERE userID = ?', [newBalance, message.author.id])         
                          let insertdata = db.prepare('INSERT INTO usercards VALUES (?,?,?);')
                          insertdata.run(message.author.id, 1,'Captain America')
                          insertdata.finalize()
                          message.channel.send("You have just bought Captain America!")
                          }
                     else
                          message.reply("You do not have enough Squad Points for that.")
                       })   
                   })
                } 
          else
        message.reply("You already have this item.")  
               
                         })
                    }
                }