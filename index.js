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
if (message.content.startsWith("!avatar")) {
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

client.on('message', function(message) {//Narox
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;//Narox
        var Narox = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()//Narox
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)//Narox
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("559376270350221312").send({embed:Narox});//Narox
    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'id')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**This Command Just In Servers**')
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(':clipboard: | User identity info')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('• Name :', message.author.username,true)
        .addField('• Tag :', message.author.discriminator,true)
        .addField('• ID :', message.author.id,true)
        .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• Total invites :', inviteCount,true)
        .addField('• Roles :', roles)
        .setTimestamp()
        message.channel.sendEmbed(id).then(c => {
            c.react('📋')
                })
            })
        }
    
        
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'chat');
 
  if (!channel) return;

  channel.send(`__Welcome To __ **Saturn Server** :tulip:,:leaves:, ${member}`);
});




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`__Welcome To __ **Saturn Server** :tulip:,:leaves:;
 ${member}  
 `) 
}).catch(console.error)
});

client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["fuck","fuck off","كسمك","نيك امك","يا ابن القحبه","زبي","يا ابن شرموطه","يلعن ابوك"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("ممنوع السب"); 
  }
});

client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اختيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel(" VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});

client.on('message', message => {

  if (message.content.startsWith( prefix + "rep")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
message.channel.send(
      "\n" + "#rep <@!" + args + ">")
  }
});

client.on("message", message => {
var prefix = "!" // البريفكس
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) { // ا
        if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});


client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow bot.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
});

client.on('message', msg => {
  if (msg.content === 'فلسطين') {      
    msg.channel.send(":flag_ps:")
  }
});

client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.channel.send("🇲🇷")
  }
});

client.on('guildDelete', guild => {
  let joinedbot = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('✅ | Join Bot')
  .setDescription(`Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get("559376270350221312").sendEmbed(joinedbot);
});


client.on('guildDelete', guild => {
  let kickedbot = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('❎ | Leave Bot')
  .setDescription(`Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get("559376270350221312").sendEmbed(kickedbot);
});

client.on('message', async msg => {
  if(msg.content.startsWith('!leaveall')) {
    if(msg.author.id !== 'Your ID here...') return;
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`Leaving from all servers..`);
  }
});

client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '!';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'dcolors') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);
    message.channel.send("جاري المسح..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      m.edit(`تم إزالة جميع الالوان.`)
    });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "image")) {
    var embed = new Discord.RichEmbed()
    .setTitle("صورة السيرفر")  
    .setColor("RANDOM")
    .setImage(message.guild.iconURL)
    message.channel.sendEmbed(embed);
  }
});

  client.on('message', message => {
if(message.content.startsWith("!slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => { //ping
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    
});

client.on('message', message => {
    var prefix = "!"
     let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if(command == "draw") {
     var Canvas = require('canvas')
   , Image = new Canvas.Image
   , canvas = new Canvas(450, 170)
   , ctx = canvas.getContext('2d');
   ctx.font = '30px Impact';
   let args = message.content.split(" ").slice(1);
   
 Image.src = canvas.toBuffer();
 
     console.log(Image);
 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
 ctx.fillText(args.join("  "),110, 70);
 
 
 ctx.beginPath();
 ctx.lineTo(50, 102);
 ctx.stroke();
 
 message.channel.sendFile(canvas.toBuffer());
 }
 
 });


client.on('ready', () => {
        console.log(`Saturn Server `);
              client.user.setActivity("Saturn Server", {type: 'LISTENING'});
      
      });
	 
client.on("message", (message) => {
    if(message.content.startsWith(prefix+"gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(`**شتبي ليش منشنتني خلني بسيرفر وخل الله يعديك**`)
    }
});

client.on("message", message => {
    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

client.on("message", msg => {
  var prefix = '!'//البركفس
  if(msg.content.startsWith(prefix + 'acc')){
    let embed = new Discord.RichEmbed()
    .setThumbnail(msg.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Year📆",msg.author.createdAt.getFullYear())
    .addField("Hour📆", msg.author.createdAt.getHours())
    .addField("Day📆", msg.author.createdAt.getDay())
    .addField("Month📆", msg.author.createdAt.getMonth())
    .addField("Minutes📆", msg.author.createdAt.getMinutes())
    .addField("Seconds📆", msg.author.createdAt.getSeconds())
    .addField("Full📆", msg.author.createdAt.toLocaleString())
    .setTimestamp()
    msg.channel.send(embed);
  }
});

client.on("message", msg => {
  var prefix = '!'//البركفس
  if(msg.content.startsWith(prefix + 'ser')){
    let embed = new Discord.RichEmbed()
    .setThumbnail(msg.guild.iconURL)
    .setColor("RANDOM")
    .addField("Year📆",msg.guild.createdAt.getFullYear())
    .addField("Hour📆", msg.guild.createdAt.getHours())
    .addField("Day📆", msg.guild.createdAt.getDay())
    .addField("Month📆", msg.guild.createdAt.getMonth())
    .addField("Minutes📆", msg.guild.createdAt.getMinutes())
    .addField("Seconds📆", msg.guild.createdAt.getSeconds())
    .addField("Full📆", msg.guild.createdAt.toLocaleString())
    .setTimestamp()
    msg.channel.send(embed);
  }
});

client.on('guildCreate', guild => {
   
  client.users.get("436918120184021012")
    const Dark&Narox = new Discord.RichEmbed()
    .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
    .setDescription(`**
  Server name: __${guild.name}__
  Server id: __${guild.id}__
  Server owner: __${guild.owner}__
  Member Count: __${guild.memberCount}__
  Servers Counter : __${client.guilds.size}__**`)
          .setColor('#36393e')
          .setFooter('Narox' , client.user.avatarURL)
         client.users.get("436918120184021012").send({Dark&Narox});
});
 
client.on('guildDelete', guild => {
   
  client.users.get("436918120184021012")

  const Dark&Narox = new Discord.RichEmbed()
  .setAuthor(`Saturn Bot. left a server ❎`)
  .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
         .setColor('#36393e')
         .setFooter('Narox' , client.user.avatarURL)
         client.users.get("436918120184021012").send({Dark&Narox});
 
});

client.on("message", msg => {
 if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return msg.reply("انت لا تملك صلاحيات !! ").then(msgS => msgS.delete(5000));
              if(!msg.guild.member(client.user).hasPermission("MANAGE_Roles")) return msg.reply("البوت لايملك صلاحيات ").then(msgS => msgS.delete(5000));;
var prefix = '!';//البرفكس
if(msg.content.startsWith(prefix + "drooms")){
msg.delete();
var roles = msg.guild.roles.forEach(m =>{
m.delete();
})
msg.reply("تم بنجاح").then(p => {
p.edit("✅")
p.delete(1700);
})
}
});


client.on('message', message => { ///zezo and alfa codes
 
      if(message.content.startsWith ("!خطوبه")) {  ///zezo and alfa codes
      if(!message.channel.guild) return message.reply('**هذا الامر فقط للسيرفرات**')  ///zezo and alfa codes
      var proposed = message.mentions.members.first()  ///zezo and alfa codes
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تخطب واحده يا ابني**').catch(console.error);  ///zezo and alfa codes
      if(message.mentions.users.size > 1) return message.reply(' 😳 **بدك تخون بنتي ؟**').catch(console.error);  ///zezo and alfa codes
       if(proposed === message.author) return message.reply(`**.**`);  ///zezo and alfa codes
        if(proposed === client.user) return message.reply(`** تبي تخطبني وانا بمقام ابوك انقلع **`);  ///zezo and alfa codes
              message.channel.send(`**${proposed}   ///zezo and alfa codes
 بنتي هاد شاب بده يخطبك  ${message.author}         ///zezo and alfa codes
 معك 30 ثانيه
 اكتبي اقبل او لا لو شاب مناسب لك**`)   ///zezo and alfa codes
 
const filter = m => m.content.startsWith("اقبل");
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك يا ابنائئ انشاء الله تتجوزا عن قريب** `);
})
 
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`  **${message.author} انا متل ابوك بس بنتي ما تبيك ياريت تنقلع** `); ///zezo and alfa codes
 
}) ///zezo and alfa codes
 
     
  } ///zezo and alfa codes
 
}); ///zezo and alfa codes


client.on('message', message => {
var prefix = "!";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on("message",async msg => {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
  let Alpha = '!';//البرفكس
  if(msg.content.startsWith(Alpha + "cr")){//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.reply("**You Don't Have Administrator Permission**").then(a => {
      a.delete(2222)
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    if(!msg.guild.members.get(client.user.id).hasPermission('ADMINISTRATOR')) return msg.reply("**I'm Don't Have Administrator Permission**").then(b => {
      b.delete(2222)
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    let fltr = m => m.author.id === msg.author.id
    let name = '';
    //Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    await msg.reply("**اكتب اسم الروم الان**").then(e => {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      msg.channel.awaitMessages(fltr, {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
        time: 60000,
        max:1
      })
      .then(co => {
      name = co.first().content
      co.first().delete();
      let type = '';
      e.edit(`${msg.author},**اكتب نوع الروم الان | Text Or Voice**`).then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 600000,
        max: 1
      })
      .then(co => {
        type = co.first().content
        co.first().delete();
        e.edit(`${msg.author},**هل انت متاْكد؟**| ✔ | | ❌ |`).then(od => {
          od.react("✔")
          .then(()=> od.react("✔"))
          .then(()=> od.react("❌"))
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
          //Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
          let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
          let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
          reaction1.on("collect", r => {
            msg.reply("**تم صنع الروم بنجاح ✔**").then(op => {
              op.delete(2222)
              od.delete(2222)
              msg.guild.createChannel(name,type);
            })
          })    
          reaction2.on("collect", r => {
            msg.reply("**تم الغاء صنع الروم بنجاح ✔**").then(de => {
              de.delete(2222)
              od.delete(2222)
            })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
          })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ  
        })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
  }//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
});//Alpha Codes & ּا̍ڵــٿــڔٰ̍ڪــڛۜ


client.on('message', async message => {//alpha codes & Mrx -Dev
    if (message.content.startsWith(prefix + 'dm')) {//alpha codes & Mrx -Dev
        let args = message.content.split(' ').slice(2);//alpha codes & Mrx -Dev
        let man = message.mentions.members.first();//alpha codes & Mrx -Dev
        if (!args) return message.reply('أكتب رسالتك') //alpha codes & Mrx -Dev
        if (!man) return message.reply('رجاء منشن شخص') //alpha codes & Mrx -Dev
        let msgname = new Discord.RichEmbed()//alpha codes & Mrx -Dev
        .setColor('RANDOM')//alpha codes & Mrx -Dev
        .setTitle(':new: You Have New Message!')//alpha codes & Mrx -Dev
        .addField(':hammer: The Sender:',message.author.username)//alpha codes & Mrx -Dev
        .addField(':scroll: The Messasge:',args)//alpha codes & Mrx -Dev
        .setFooter(message.author.username,message.author.avatarURL)//alpha codes & Mrx -Dev
        let msgnoname = new Discord.RichEmbed()//alpha codes & Mrx -Dev
        .setColor('RANDOM')//alpha codes & Mrx -Dev
        .setTitle(':new: You Have New Message!')//alpha codes & Mrx -Dev
        .addField(':hammer: The Sender:','Unknown')//alpha codes & Mrx -Dev
        .addField(':scroll: The Messasge:',args)//alpha codes & Mrx -Dev
        .setFooter(message.author.username,message.author.avatarURL)//alpha codes & Mrx -Dev
        await message.channel.sendMessage(`صراحة شخص بأظهار أسمك |:man://alpha codes & Mrx -Dev
 صراحة شخص بدون اظهار أسمك |:bust_in_silhouette:`).then(e => {//alpha codes & Mrx -Dev
            e.react("👨")//alpha codes & Mrx -Dev
            .then(()=> e.react("👨"))//alpha codes & Mrx -Dev
            .then(()=> e.react("👤")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '👨' && user.id === message.author.id;//alpha codes & Mrx -Dev
            let reaction2Filter = (reaction, user) => reaction.emoji.name === '👤' && user.id === message.author.id;//alpha codes & Mrx -Dev
            let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
            let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
            reaction1.on("collect", c => {//alpha codes & Mrx -Dev
                e.edit(`✔ تم ارسال رسالتك بنجاح`)//alpha codes & Mrx -Dev
                man.sendEmbed(msgname);//alpha codes & Mrx -Dev
                    })//alpha codes & Mrx -Dev
                    reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                        e.edit(`✔ تم ارسال رسالتك بنجاح`)//alpha codes & Mrx -Dev
                        man.sendEmbed(msgnoname); //alpha codes & Mrx -Dev
                        
        })
    }
        )}
        
});



client.login(process.env.TOKEN);
