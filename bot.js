const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['463233613454901249'];
const prefix = ['1'];////////////////// البرفكس

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Ransi `);//////////////// هنا حط اسمك
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@463233613454901249>')/////////////// بتاعك لو مش عارف اذاى تجيبو كلم رانسى  IDهنا ال
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**احا الشبشب ضاع**[ " ${x} " ]`)/////////////// هنا الرسالة اللى عايز البوت يكتبو
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Ransi');/////هنا اكتب اسم الرتبة 
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@463233613454901249>')/////////////// بتاعك لو مش عارف اذاى تجيبو كلم رانسى  IDهنا ال
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`احا الشبشب ضاع**[ " ${x} " ]`)/////////////// هنا الرسالة اللى عايز البوت يكتبو
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Lava');/////هنا اكتب اسم الرتبة 
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

///////////////////لا تعدل فيها شيء
client.login(process.env.TOKEN);////////////// هنا هتشغل اكونت
client2.login(process.env.TOKEN2);///////////// هنا هتشغل اكونت تانى 
