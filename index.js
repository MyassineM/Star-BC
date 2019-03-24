const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"



//bc

client.on("message", message => {
    if (message.content.startsWith("!bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "!";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "obc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("b!avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('b!adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



  
  client.on('message', msg => {
    if(msg.content === '!help')
    msg.reply('Check Your DM Saturn Bot :heart::white_check_mark:')
  });
  
  
  
  
  
  
  
  
  
  
  client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       !bc | لأرسال برود كاست للكل

       !obc  |  لأرسال برود كاست للأونلاين

       !invite | لدعوة البوت الي سيرفرك

       !support | سيرفر السبورت
       Bot By Saturn Server** `)
     
            
   message.author.sendEmbed(embed)
   
   }
   });


   client.on("message", message => {
    if (message.content === "!invite") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField('Broadcast', `Nope Bot By Yas.sine Ask Him For Invite It :heart:`)
     message.author.send({embed});
   
    }
   });


   client.on("message", message => {
    if (message.content === "!support") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField('❤سيرفر الدعم الفني', `  https://discord.gg/7TRnhmq  `)
     message.author.send({embed});
   
    }
   });





   client.on('message', message => {
    if (message.content.startsWith("!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Arab Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[-]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                    })
}
});


client.on('message', message => {
    if (message.content === ('!server')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@507533148897411082>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});//toxic codes

client.on("message", msg => {//So-92.#0885
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";//البرفكس
let msgarray = msg.content.split(" ");//So-92.#0885
let cmd = msgarray[0];//So-92.#0885
let args = msgarray.slice(1);

if(cmd === `${p}ban`){
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!bUser) return msg.channel.send("استخدم: `[ ${p}ban @user <السبب> ] مثال : ${p} @So-92.#0885 نشر`");
let breason = args.join(" ").slice(22);
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("ليس لديك الصلاحية الكافية ❌").then(s => {
s.delete(1600);
})
 if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("انا ليس لدي صلاحية كافية ❌").then(z => {
z.delete(1600);
})
if(bUser.hasPermission("BAN_MEMBERS")) return msg.channel.send("لا يمكنني ان احظر اداري").then(bs => {
bs.delete(1600);
})
//So-92.#0885
let banembed = new Discord.RichEmbed()
.setDescription("~ban~")
.setColor("BLACK")
.addField("banned User", `${bUser} with ID: ${bUser.id}`)
.addField("banned By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("banned In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", breason)
//So-92.#0885
let banChannel = msg.guild.channels.find("name","log-bans");
if(!banChannel) return msg.channel.send(`اكتب ${p}banslog`).then(pb => {
pb.delete(1600);
})
//So-92.#0885
msg.guild.member(bUser).ban();
msg.reply("تم بنجاح").then(ps => {
ps.edit("✅").then(ss => {
ss.delete(1500)
})
})
banChannel.send(banembed)
    return;
}


});//So-92.#0885


client.on('ready',  () => {
            console.log(`!S`);
    client.user.setGame("Saturn Server", "https://www.twitch.tv/idk");
});
// كود الواتشينق
client.on('ready', () => {
        console.log(`!W`);
              client.user.setActivity("Saturn Server", {type: 'WATCHING'});
      
      });
// كود اللينسق
      client.on('ready', () => {
        console.log(`!L`);
              client.user.setActivity("Saturn Server", {type: 'LISTENING'});
      
      });   // Toxic Code
//  كود البلاينق 
client.on('ready', () => {
        console.log(`!P`);
              client.user.setActivity("Saturn Server", {type: 'PLAYING'});
      
      });

client.on('message', msg => {
  if(msg.content === '.')
  msg.reply('**Welcome To **__Saturn Server__ 🌷,🍃')
});

client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply('هلا بيك')
});

client.on('message', msg => {
  if(msg.content === 'سلام عليكم')
  msg.reply('وعليكم السلام')
});

client.on('message', msg => {
  if(msg.content === 'سلام')
  msg.reply('سلام حب ❤')
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Saturn,,"));
    });


client.on("message", message => {
    var prefix = "!";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});

client.on("message", (message) => {

   if (message.content.startsWith("!new")) {   
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب.confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })   
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on("message", message => {
 
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});

client.on('message', message => {
    if (message.content.includes('discord.gg')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('kick <@' + message.author.id + '>')
       message.delete() 
       } /////////////// Galal , ALPHA CODES
    } /////////////// Galal , ALPHA CODES
          if (message.content.startsWith("kick")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.kick().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {  /////////////// Galal , ALPHA CODES
                 },  /////////////// Galal , ALPHA CODES
                 title: 'بسبب النشر ' + member.displayName + ' تم حظر', 
                 color: 490101,
                 }
               });
           }  /////////////// Galal , ALPHA CODES
         ) 
       }  /////////////// Galal , ALPHA CODES
   });  /////////////// Galal , ALPHA CODES


client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
   
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor(0xd3d0c4)
        .setImage(`${x5bzm.avatarURL}`)
           .setFooter(`©  Dreams™ `)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  
        const googl = require('goo.gl');
        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            message.channel.send('Error!');
        });

    }
});


	    
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for servers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار مو زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(6000)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح :hole: **").then(msg => msg.delete(10000));
    }
});
	    

client.on('message', message => {
        
   if(message.content.startsWith(prefix + 'rename')) {
if(message.member.hasPermission("ADMINISTRATOR")) {
         let args = message.content.split(' ').slice(2);
var mentionned = message.mentions.users.first();
   
  if(!args){
    return message.channel.send(":x: " + `**| Please enter a new Nick for ${mentionned}**`);
  }
  if (!mentionned)return message.channel.send("**You Have to Mention A member :x:**")
  message.guild.member(mentionned).setNickname(args.join(" ")).then(user => message.channel.send(`:full_moon_with_face: ${mentionned}'s' **New NickName is **` + `__${args.join(" ")}__` + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission");
  }


    }
});
	    
client.on('message', message => {
        
   if(message.content.startsWith(prefix + 'timer')) {
         let args = message.content.split(' ').slice(1);
  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));

    }
});
	    

	    
client.on('message', message => {
    if(message.content == '!members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
             .setColor(0xd3d0c4)
            .setFooter(`©  Dream™ `)
         message.channel.send({embed});

    }
  });
	    
	    
client.on("message", message => {

 if(message.content.startsWith('!احصاء')) {
     
     const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** احصاءات الالعاب :chart_with_upwards_trend:  **`)
.addField('**عدد مرات اللعب :**',
games[message.author.id].loses  + games[message.author.id].wins
,true)

.addField('**عدد مرات الفوز :**',
`
 ${games[message.author.id].wins}
 `
,true)

.addField('**عدد مرات الخسارة :**',
`
 ${games[message.author.id].loses}
 `
,true)

.addField('**مجموع الكريدت الي فزت فيه  :**',
`
 ${games[message.author.id].wins}` * 25
 
,true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
     
     
     
 }

});
	    
	   
	   
client.login(process.env.TOKEN);
