const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'sing') {

       message.reply('song');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTkxMDA5NjQxMTUzMTY3MzYx.XQqiqg.bqLOYNV4tP17qwJX9jdIYyOpLmc);//where BOT_TOKEN is the token of our bot
