
const Discord = require('discord.js');
		
     const article = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('${args[0]}')
	.setURL('https://discord.js.org/')
	.setAuthor('New Lancudo Times', '', '')
	.setDescription('${args[1]}')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');


