const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ready to destroy lives!');
});

client.on('message', message => {
  // Your message handling logic goes here
  // Example:
  // if (message.content === '!ping') {
  //   message.channel.send('Pong!');
  // }
});

client.login('YOUR_BOT_TOKEN');
