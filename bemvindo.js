const Discord = require('discord.js');

    const bot = new Discord.Client();

    const token = "NzYyMDM4MDExMjA2NTY1ODg5.X3jVMw.WIes-sztxTN_4TLC9xtyipw2uSA";

    bot.login(token);

    bot.on('ready', () => {

        console.log('estou prontinha pra voce :3')
    })

client.on("guildMemberAdd", async (member) => { 

    let guild = await client.guilds.cache.get("IDdoSeuServidor");
    let channel = await client.channels.cache.get("IDdoCanalDeBoasVindas");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
    if (guild != member.guild) {
      return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#7c2ae8")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas-vindas ${emoji}`)
        .setImage("https://imgur.com/3vYVlHb.gif")
        .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("")
        .setTimestamp();
  
      channel.send(embed);
    }
  });