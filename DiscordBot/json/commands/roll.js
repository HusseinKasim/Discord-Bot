
const rollDice = () => Math.floor(Math.random() * 9) * Math.floor(Math.random() * 4)

module.exports = {

  name: 'roll',
  description: 'roll command',
  execute(message, args){
      message.channel.send("You rolled: " + rollDice())
  }
  
}