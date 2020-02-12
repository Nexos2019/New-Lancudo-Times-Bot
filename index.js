const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(['|']);
  const commandName = args.shift().toLowerCase()

   if (commandName === 'ping') {
    client.commands.get('ping').execute(message, args);
  } 
  if (commandName === 'publish ') {
    
    const article = new Discord.RichEmbed()
     .setColor('#1fceff')
    .setTitle('**__' + args[0] + '__**')
    .setURL('https://twitter.com/@newlancudotimes')
    .setAuthor('New Lancudo Times', client.users.get(`677129083582152715`).avatarURL, 'https://twitter.com/@newlancudotimes')
    .setDescription(args[1])
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    client.channels.get(`676568248942067712`).send(article);}
  
  }) 


client.login(token)