    const Discord = require('discord.js');

    const bot = new Discord.Client();

    const token = "NzYyMDM4MDExMjA2NTY1ODg5.X3jVMw.WIes-sztxTN_4TLC9xtyipw2uSA";

    bot.login(token);

    bot.on('ready', () => {

        console.log('estou prontinha pra voce :3')
    })

    bot.on('message', msg =>{
        if(msg.content === ''){
            msg.reply('oie gostoso(a) bem vindo a putaria!')
        }
        
        
    })
    

    



    
