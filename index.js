const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const developers = ['410778583682777098'];
const googl = require('goo.gl');
const translate = require('google-translate-api');
const moment = require("moment");
const UserBlocked = new Set();
const math = require('math-expression-evaluator');
const figlet = require('figlet');
const google = require('google-it');
const dateFormat = require('dateformat');
const pretty = require('pretty-ms')
,ti={}
,spee={};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(` ${prefix}help | Explosion System ✨ `,"https://www.twitch.tv/S-F")
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });

  client.on('message', message => {

	if(message.author.id === "410778583682777098" || message.author.id === "342039052003835924") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });

// ================================================================================================== //


client.on("message", message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if(!message.channel.guild) return;
    if(message.author.bot) return;
    var args = message.content.split(" ").slice(1).join(" ");
    const embed = new Discord.RichEmbed()
                          .setColor('#36393e') 
    .setTitle(`**Usage.**`)
    .setDescription(`\`${prefix}bc <message>\` ~ Broadcast Message For All Members.\n\`${prefix}obc <message>\` ~ Broadcast Message For Online Members.`)
    .setFooter(message.author.username, message.author.displayAvatarURL);
    if(message.content.startsWith(prefix + "bc")) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
        if(!args) return message.channel.sendEmbed(embed);
            message.guild.members.filter(m => !m.user.bot).forEach(member => {
                var bc = args.replace("[user]", member);
                member.send(bc);
                if(message.attachments.first()) {
                    member.sendFile(message.attachments.first().url).catch();
                }
            });
    }
    if(message.content.startsWith(prefix + "obc")) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
    
    if(!args) return message.channel.sendEmbed(embed);
    message.guild.members.filter(m => m.user.presence.status !== "offline" && !m.user.bot).forEach(member => {
        var obc = args.replace("[user]", member);
        member.send(obc);
        if(message.attachments.first()) {
            member.sendFile(message.attachments.first().url).catch();
        }
    
    });
    }
    });

client.on('ready', () => {
    const ex = client.guilds.get("439182014231347210");
    setInterval(() => {
        ex.channels.get("531825441565310986").setName(`~ Online : ${ex.members.filter(n => n.voiceChannel).size} 🔊 .`);
    }, 1000);
});

client.on("ready", () => {
  var ex = client.guilds.get("439182014231347210");

  setInterval(() => {
    ex.channels.get("531831434869080074").setName(`~ Members : ${ex.memberCount} .`);
  }, 1000);
});

client.on('message', msg => {
	
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```diff\n# Provide A Number.```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```diff\n# Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }
    }
}
});


client.on("message", message => {
	
 if (message.content === prefix + "help") {
  const embed = new Discord.RichEmbed()
                            .setColor('#36393e') 
      .setDescription(`

	         Please Choose:

${prefix}help public » اوامر عامة
${prefix}help admin » اوامر ادارة السيرفر
${prefix}help games » اوامر الالعاب
`)
   message.channel.sendEmbed(embed)

   }
   });


client.on("message", message => {
	
 if (message.content === prefix + "help public") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
                            .setColor('#36393e') 
      .setDescription(`
			  اوامر عامة
❖ ${prefix}allbots ~ لعرض جميع البوتات الموجودة في السيرفر
❖ ${prefix}server ~ لعرض معلومات عن السيرفر
❖ ${prefix}bot ~ لعرض معلومات عن البوت
❖ ${prefix}skin <name> ~ لعرض سكن أي شخص في لعبة ماينكرافت عن طريق اسمه
❖ ${prefix}count ~ لعرض عدد الأشخاص الموجودين في السيرفر بدون البوتات
❖ ${prefix}invites ~ لعرض عدد الأعضاء الذين دعوتهم الى السيرفر
❖ ${prefix}invite-codes ~ لعرض جميع روابط الدعوات التي قمت بانشائها في السيرفر
❖ ${prefix}cal ~ للقيام بأي عملية حسابية
❖ ${prefix}trans <language> <text> ~ لترجمة أي نص الى أي لغة تريدها
❖ ${prefix}short ~ لآختصار الروابط الكبيرة مباشرةً
❖ ${prefix}tag <text> ~ لتكبير أي نص تكتبه
❖ ${prefix}google ~ البحث من محرك البحث قوقل
❖ ${prefix}perms ~ لعرض جميع الخصائص التي تملكها في السيرفر
❖ ${prefix}channels ~ لعرض جميع الرومات الموجودة في السيرفر
❖ ${prefix}emojilist ~ لعرض جميع الرموز التعبيريةأو الايموجيات الموجودة في السيرفر
❖ ${prefix}avatar <user> ~ لعرض صورتك الرمزية أو صورة أي شخص في السيرفر تقوم بمنشنته
❖ ${prefix}image ~ لعرض صورة السيرفر
❖ ${prefix}members ~ لعرض معلومات عن كافة الأعضاء من ناحية الحالة والعدد
❖ ${prefix}id ~ لعرض معلومات عامة عنك أو عن أي عضو تقوم بمنشنته
❖ ${prefix}emojify <text> ~ لتحويل أي كتابة تقوم بكتابتها الى رموز
❖ ${prefix}topinv ~ لعرض قائمة بأكثر من قاموا بدعوة أشخاص للسيرفر
❖ ${prefix}ticket ~ لعرض جميع أوامر التكتات
`)
   message.author.sendEmbed(embed).catch(err => message.channel.send("**Please enable recieving direct messages.**"));

   }
   });

   client.on("message", message => {
	
 if (message.content === prefix + "help admin") {
	  message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
                            .setColor('#36393e') 
      .setDescription(`
          اوامر ادارة السيرفر
❖ ${prefix}bans ~ لعرض قائمة بالأشخاص المحظورين من السيرفر
❖ ${prefix}move <user> ~  لسحب أي شخص من روم صوتي الى الروم الصوتي الخاص بك
❖ ${prefix}move all ~ لسحب جميع الأعضاء في الرومات الصوتية بدون البوتات الى الروم الصوتي الخاص بك
❖ ${prefix}bc ~ لارسال رسالة جماعية الى جميع الأعضاء في السيرفر
❖ ${prefix}obc ~ لارسال رسالة جماعية الى جميع الأعضاء الأونلاين في السيرفر
❖ ${prefix}roles ~ لعرض جميع أوامر ادارة الرتب
❖ ${prefix}hc ~ لاخفاء الشات
❖ ${prefix}sc ~ لاظهار الشات
❖ ${prefix}clear <number> ~ لمسح الشات بعدد
❖ ${prefix}mute <user> <duration> <reason> ~ لاعطاء العضو ميوت كتابي مع السبب
❖ ${prefix}unmute <user> ~ لفك الميوت عن شخص تم اعطاؤه ميوت مسبقاً
❖ ${prefix}kick <user> <reason> ~ لطرد شخص من السيرفر مع السبب
❖ ${prefix}ban <user> <reason> ~ لحظر شخص من السيرفر مع السبب
❖ ${prefix}mutec ~ لعمل ميوت للشات
❖ ${prefix}unmutec ~ لفك الميوت عن الشات
❖ ${prefix}setText <name> ~ لعمل روم كتابي مع الأسم
❖ ${prefix}setVoice <name> ~ لعمل روم صوتي مع الأسم
❖ ${prefix}dchannel <name> ~ لحذف أي روم في السيرفر بالأسم
❖ ${prefix}ccolors <number> ~ لعمل رتب الوان بالعدد المطلوب
❖ ${prefix}setVo <name> ~ لعمل روم الفويس اونلاين مع الأسم
❖ ${prefix}setMc <name> ~ لعمل روم عدد الأعضاء مع الأسم
❖ ${prefix}tempban <user> <duration> <reason> ~ بان مؤقت لأي شخص مع السبب
`)
   message.author.sendEmbed(embed).catch(err => message.channel.send("**Please enable recieving direct messages.**"));

   }
   });

   client.on("message", message => {
	
 if (message.content === prefix + "help games") {
	  message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
                            .setColor('#36393e') 
      .setDescription(`
          اوامر الالعاب
❖ ${prefix}rps ~ للعب لعبة حجرة ورقة مقص
❖ ${prefix}speed ~ للعب لعبة أسرع كتابة
❖ ${prefix}question ~ لارسال اسئلة عامة
❖ ${prefix}joke ~ لعرض نكتة عشوائياً
❖ ${prefix}fkk ~ للعب لعبة فكك
❖ ${prefix}capital ~ للعب لعبة العواصم
❖ ${prefix}tweet ~ للعب لعبة كت تويت
❖ ${prefix}roll <number> ~ لعمل قرعة لرقم عشوائي
❖ ${prefix}itwy ~ للعب لعبة لو خيروك
❖ ${prefix}mariam ~ للعب لعبة مريم
❖ ${prefix}dyk ~ للعب لعبة هل كنت تعلم؟
❖ ${prefix}38ab ~ للعب لعبة عقاب  
`)
   message.author.sendEmbed(embed).catch(err => message.channel.send("**Please enable recieving direct messages.**"));

   }
   });




client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'bcall')){
 if (message.author.id !== '410778583682777098') return message.channel.send('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅');
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });


  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emojify")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('**Please provide some text to emojify!**');
  }

  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك - خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك - خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith(prefix + "38ab")) {
              if(!message.channel.guild) return message.channel.send('** This command only for servers**');
var embed = new Discord.RichEmbed()
                      .setColor('#36393e') 
 .setThumbnail(message.author.avatarURL)
.addField('-' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', ra3d => {

                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('Err: `COLORS_SIZE_MISSING`.');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('Err: `PERMISSIONS_MISSING`.');
             if(isNaN(args)) return ra3d.channel.send("Err: `NUMBER_NOT_DEFINED`."); 
             ra3d.channel.send(`**✅ | Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {

var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'fact')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقت
