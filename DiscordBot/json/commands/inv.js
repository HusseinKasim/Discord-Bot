const Discord = require("discord.js")
const { pagination } = require('djs-reaction-collector')
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db')


module.exports = {

  name: 'inv',
  description: 'inv command',
 async execute(message, args){
    {
      
      
   //Page 1
     const page1 = new Discord.MessageEmbed()
   {
    await db.each('SELECT cardName FROM usercards WHERE userID = ?;', [message.author.id], function(err, row){
      callback(row);   
  })
   
  function callback(row) {
    let name = row.cardName
    page1.addField(name, "Marvel Card",false)
  }
   }

      const pages = [
       page1
      ]

      const emoji = ['⬅️', '➡️']

  const timeout = 120000

    pagination(message, pages, emoji, timeout)

}

  }
}