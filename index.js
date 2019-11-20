const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQyNDkxNDk2NjQ1Mzk0NDMy.XcbR8Q.cF5TdQho5xbCVYqgR_bsahD3evY';

const PREFIX = '½';

bot.on('ready', () =>{
    console.log('Bot is Online!');
})

bot.on('message', msg=>{
    if(msg.content ===   "Hi"){
        msg.reply('Hi!');
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;
        case 'Info':    
        Message.Channel.sendmessage('#rules')
        break;
    
    
    }     

})

bot.login(token);
