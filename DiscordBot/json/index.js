const Discord = require("discord.js")
const client = new Discord.Client() 
const config = require('./config.json')
const prefix = config.prefix
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)


const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const buyCommandFiles = fs.readdirSync('./commands/buys').filter(file => file.endsWith('.js'));



client.on('ready',  () => {
  console.log('Ready')

})


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of buyCommandFiles) {
	const buyCommand = require(`./commands/buys/${file}`);
	client.commands.set(buyCommand.name, buyCommand);
}


// commands
client.on('message', function(message) {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}

})


client.login(config.token)