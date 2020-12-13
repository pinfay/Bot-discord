const Discord = require('discord.js');

const bot = new Discord.Client();
estouPronto = false;
const token = "NzYyMDM4MDExMjA2NTY1ODg5.X3jVMw.WIes-sztxTN_4TLC9xtyipw2uSA";

bot.login(token);

bot.on('ready', () => {

    console.log('estou prontinha pra voce :3')
})

let connection;

if (msg.content === '!join'){
    if (msg.member.voice.channel){ 
          
          connection = await msg.member.voice.channel.join();

          estouPronto = true;
    } else {
          msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
    }
}


else if (msg.content === '!leave'){
    if (msg.member.voice.channel){ 
          msg.member.voice.channel.leave();
          estouPronto = false;
    } else {
          msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
    }
}


else if (msg.content.startsWith('!play ')){
    if (estouPronto){
          let oQueTocar = msg.content.replace('!play ', '');
          if (Ytdl.validateURL(oQueTocar)){
                
                connection.play(Ytdl(oQueTocar)); 
          } else {
                msg.channel.send('O link não é válido!')
          }
    }
}


