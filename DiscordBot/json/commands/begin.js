const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db')


module.exports = {
  name: 'begin',
  description: 'begin command',
 async execute(message, args){

   await db.get('SELECT userID FROM users WHERE userID = ?;', [message.author.id], function(err, row) {
      callback(row);  
 })

 function callback(row) {
   if(row === undefined)
   {
 let insertdata = db.prepare('INSERT INTO users VALUES (?,?,?);')
 insertdata.run(message.author.id, message.author.username,10000)
 insertdata.finalize()
 message.reply("Done!")
}
  else
 message.reply("You have already done that.")
}

}
}