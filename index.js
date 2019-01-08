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

client.on('ready', () => {
    var ex = client.guilds.get("439182014231347210");
        setInterval({
                ex.channels.get("531831434869080074).setName(`~ Members : ${ex.memberCount} .`);
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
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
];
 client.on('message', message => {
 if (message.content.startsWith(prefix + 'mariam')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("Mariam")
                        .setColor('#36393e') 
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
    
	
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    const embed = new Discord.RichEmbed()
                          .setColor('#36393e') 
    .setDescription(`**Usage:**\n${prefix}trans <Language> <Text>`);
    if (!args[0]) {
        return message.channel.send(embed);
    } else {

        if (args.length === undefined) {
            return message.channel.sendEmbed(embed);
        } else {
            let transArg = args[0].toLowerCase();
            args = args.join(' ').slice(1)
            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);
            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                                          .setColor('#36393e') 
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});


client.on("message", message => {
if(!message.channel.guild) return;
if(message.content == prefix + "allbots") {
if(message.author.bot) return;
var botsMap = message.guild.members.filter(r => r.user.bot).map(m => `<@${m.id}> - [ ${m.id} ]`).join("\n");
message.channel.send(`**Bots In This Server [ ${message.guild.members.filter(m => m.user.bot).size} ] :\n====================**\n\n${botsMap}\n\n**====================**`)
}
});

client.on("message", function(message) {
	
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 client.on('message', message => {
	 
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.channel.send(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
                                  .setColor('#36393e') 
            .setTitle(`**${client.user.username}**`)
            .addField('``My Ping``' , `[ ${Date.now() - message.createdTimestamp}` + 'ms ]', true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB ]`, true)
            .addField('``servers``', '[ ' + client.guilds.size + ' ]', true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ ${prefix} ]` , true)
                  .addField('``My Language``' , `[ JS ]` , true)
                  .setFooter("Made By Moorz.",message.author.displayAvatarURL)
			      .setTimestamp()
    });
}
});

client.on("message", message => {
    
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image).catch(err => message.channel.send("**Couldn't find any players with that username.**"));
        }
    });

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
                              .setColor('#36393e') 
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});


      }
      });

client.on("message", message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
if(!message.channel.guild) return;
if(message.author.bot) return;

if(message.content == prefix + "move") {
    if(!message.guild.member(message.author.id).hasPermission("MOVE_MEMBERS"))return;
    if(!message.guild.member(message.author.id).voiceChannel) {
        return message.channel.send("**You have to be in a voicechannel.**");
    }
    var userM = message.mentions.users.first();
    if(!userM) {
        return message.channel.send(`**Usage: \`${prefix}move <User>\``);
    }
    if(!message.guild.member(userM.id).voiceChannel) {
        return message.channel.send("**This user has to be in a voicechannel.**");
    }

    if(!message.guild.member(message.author.id).highestRole <= message.guild.member(userM.id).highestRole) {
        return message.channel.send("**This user is higher role than you.**");
    }
    message.channel.send(`**${userM.username}** Has been moved to **${message.guild.member(message.author.id).voiceChannel.name}** by **${message.author.username}**`);
    message.guild.member(userM.id).setVoiceChannel(message.guild.member(message.author.id).voiceChannel);

}
if(message.content == prefix + "move all") {
    if(!message.guild.member(message.author.id).hasPermission("MOVE_MEMBERS"))return;
    if(!message.guild.member(message.author.id).voiceChannel) {
        return message.channel.send("**You have to be in a voicechannel.**");
    }
    message.channel.send(`**${message.guild.members.filter(m => m.voiceChannel && !m.user.bot).size}** Members Has been moved to **${message.guild.member(message.author.id).voiceChannel.name}** by **${message.author.username}**`);

message.guild.members.filter(m => m.voiceChannel && !m.user.bot).forEach(member => {
    member.setVoiceChannel(message.guild.member(message.author.id).voiceChannel);
});
}
});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content.startsWith(prefix + "count")) {
      var IzRo = new Discord.RichEmbed()
                            .setColor('#36393e') 
      .setDescription(`**${message.guild.memberCount} ~ Members.**`);
      message.channel.send(IzRo);
      }
    });


client.on("message", async message => {
if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "invites")) {
        var empty = 0;
            message.guild.fetchInvites().then(invites => {
                invites.forEach(invite => {
                    if(invite.inviter == message.author) {
                        empty = empty + invite.uses
                    }
                });
            });
            if(empty > 0) {
                const invEmbed = new Discord.RichEmbed()
                                          .setColor('#36393e') 
                    .setTitle(`**${message.author.username}**`)
                    .setDescription(`**You Have **${empty}** Invites!`)
                    .setTimestamp();
                    message.channel.sendEmbed(invEmbed);
                    return;
            } else {
                const NoinvEmbed = new Discord.RichEmbed()
                                      .setColor('#36393e') 
                .setTitle(`**${message.author.username}**`)
                .setDescription(`**You Didn't Invite Anyone Yet. :"(**`)
                .setTimestamp();
                message.channel.sendEmbed(NoinvEmbed);
                return;

            }
    }
    if(message.content.startsWith(prefix + "invite-codes")) {
        var codes = [""];
        message.guild.fetchInvites().then(invites => {
            invites.forEach(invite => {
                if(invite.inviter == message.author.id) {
                    codes = (`discord.gg/${invite.code}`);
                }
                if(codes > 0) { 
    
                const invEmbed2 = new Discord.RichEmbed()
                                      .setColor('#36393e') 
                .setTitle(`**${message.author.username}**`)
                .setDescription(`**${codes.join("\n")}`);
                message.author.sendEmbed(invEmbed2);
                message.channel.send(":postbox: **Check Your DM**");
                }
            });
        });
    }
});


client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.channel.send(':x: **Specify an equation, please.**');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.channel.send(`Error: ${err}`);
    }

    const embed = new Discord.RichEmbed()
                          .setColor('#36393e') 
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    .setFooter(msg.author.username, msg.author.displayAvatarURL);
    msg.channel.send(embed)
    }
};
});


var coolDown = new Set();
client.on("message", message => {
  if(message.content.startsWith(prefix + "link") || message.content.startsWith("رابط")) {
    if(!message.channel.guild) return;
      if(message.author.bot) return;
        if(coolDown.has(message.author.id)) {
          return message.channel.send("**.يرجى عليك الانتظار بين كل رابط :link:**").then(m => m.delete(4000));
        }
          message.channel.createInvite({
            thing: true,
            maxUses: 5,
            maxAge: 86400
          }).then(invite => {
            message.author.send(`**مـدة الرآبط : \`يـوم\`\nعـدد الآستخدامـات : \`5\`\nhttps://discord.gg/${invite.code}**`);
              message.channel.send("**تـم آرسال الرسالـة على الخـآص :link: .**").then(m => m.delete(3000));
                coolDown.add(message.author.id);
          });
          setTimeout(() => {
            coolDown.remove(message.author.id);
          }, 360000);
          
  }
});
client.on("message", message => {

const embed = new Discord.RichEmbed()
                      .setColor('#36393e') 
.setDescription(`**Usage:**\n${prefix}short <Link>`);

if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
if(!args) return message.channel.sendEmbed(embed);

googl.setKey("AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w");
googl.getKey();
googl.shorten(args).then(url => {
    const Shorted = new Discord.RichEmbed()
                          .setColor('#36393e') 
    .setDescription(`**Link:**\n\nInput: ${args}\nOutput: ${url}`);
    message.channel.sendEmbed(Shorted);
});
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send("**Please provide some text.**");
    figlet(args, (err, data) => {
              message.channel.send(`\`\`\`\n${data}\n\`\`\``);
           });
}
});

client.on('message', message => {

    if(message.content.startsWith(prefix + 'google')) {
    var search = message.content.split(" ").slice(1);
google({ query: search, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
});

}
});

function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}
let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["السعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["القسطنطينية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["النهاية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["امازون"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["جافاسكربت"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["سهله مو صعبه"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["متجر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["شجرة الأوغيري"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["عش العصفور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["قم بكتابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["كانيكي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ليوبليانا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["هواوي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ياخرا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["يوم الخميس"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["الأرض"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["البوابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["الجمل ابو راسين"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["الحوت الأزرقء"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["القارب المكسور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["المدرسة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["اليابان"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["بلايستايشن"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["جزر القمر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["حشيش"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["سوبراشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["قوتشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ايفون"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["تيستا لاغوسا"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["بسكوت ابو ولد"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["تكأكأتم"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["الجملة المفيدة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["الأوسكار"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["كنت امشي وأمشي"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["لااااق بوتء"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ابو ناصر سرى ليله"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["عدد اللي برمجوني 2"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]

          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["بابا سنفور متعاطي"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ميرندا حمضيات يلد"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["هل الدمع من عينه"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["طارت الطياره طارت"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["أنا فوق راسي ريشه"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["فريق النجمة"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["خالد عبدالرحمن"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["حبيت مره من قلبي"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["كرستيانو يزق"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["أنت قمر يا قمر"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["انا اجمل مخلوق"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["دونت تاتش"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["توم وجيري"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["دباب اربع كفرات"]

              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["القرش الأسودد"]

              },
    {

            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ددسن موديل 85"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["الحارثيء"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["عزازي مسرع"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["جاكي شاان"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["دارك نت"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["فانتاستيك"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["زباله متنقلة"]

    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["اكس بوكس يلد"]

        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["بكسل يالوصخخ"]

    }
];

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id;
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){

        try{
}catch(e){

}

    if(!message.channel.guild) return;


const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {

 const embed = new Discord.RichEmbed()
                       .setColor('#36393e') 
     .setAuthor(`⏳ |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)



msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
                        .setColor('#36393e') 
  .setDescription('**✅ |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});


client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
                               .setColor('#36393e') 
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});






client.on('message', message => {
    if (message.content === prefix + "channels") {
        if (message.author.bot) return
                      if (!message.guild) return;

        const channels = message.guild.channels.map(channels => `${channels.name}`).join("\n");
        const embed = new Discord.RichEmbed()
                              .setColor('#36393e') 
        .setTitle(`**${message.guild.name} Channels.**`, true)
        .setDescription(`**Channels Count.**\n[ ${message.guild.channels.size} ]`,`**Channels.**\n${channels}`);
        message.channel.sendEmbed(embed);
    }
});


client.on('ready', () => {
	console.log('I am ready!');
  });

client.on('message', message => {

      if(message.content === prefix + "hidec") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return;
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Is Now Hidden! :white_check_mark:  ')
 }
});


client.on('message', message => {

      if(message.content === prefix + "sc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Channel Is Now Visible For Everyone! :white_check_mark: ');
 }
});


client.on('message', message => {
    if (message.content == prefix + "question") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 You have one minute to solve this:  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: Time Left.`);
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} You won!`);
            message.react('✅')
        })
        })
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('❖ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('#000000')
            .setDescription(List)
            .setFooter(message.guild.name)
        message.channel.send(EmojiList)
    }
});




client.on('message',function(message) {
    if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
       let muteRole =  message.guild.roles.find('name', 'Muted');
       let muteMember = message.mentions.members.first();
       let muteReason = messageArray[2];
       let muteDuration = messageArray[3];
    if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
               
     if (message.author.bot) return;
          if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
          if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
          if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
          if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
          if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
          if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
          message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
          muteMember.addRole(muteRole);
          muteMember.setMute(true)
          .then(() => { setTimeout(() => {
              muteMember.removeRole(muteRole)
              muteMember.setMute(false)
          }, mmss(muteDuration));
          });
      } 
   });

   client.on("message", message => {
    if(!message.channel.guild) return;  
     if (message.author.bot) return;
    
     let command = message.content.split(" ")[0];
    
     if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return;
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.channel.send(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
     if (message.mentions.users.size < 1) return message.channel.send(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
    
     if (message.guild.member(user).removeRole(muteRole.id)) {
         return message.channel.send("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
     } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
         return message.channel.send("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
       });
     }
    
   };
    
   });
   




    client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'joke')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var fkk =[
        {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"فكك باص",k:"ب ا ص"},
        {f:"فكك عربة ",k:"ع ر ب ة"},
        {f:"فكك سيارة",k:"س ي ا ر ة"},
        {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"فكك العنود ",k:"ا ل ع ن و د"},
        {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"فكك دحوم",k:"د ح و م"},
        {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
        {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:"فكك زنديق  ",k:"ز ن د ي ق"},
        {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:"فكك سوريا ",k:"س و ر ي ا"},
        {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
        {f:"فكك طماطم ",k:"ط م ا ط م"},
        {f:"فكك سارة ",k:"س ا ر ة"},
        {f:"فكك دراجون ",k:"د ر ا ج و ن"},
        {f:"فكك سيرفر ",k:"س ي ر ف ر"},
        {n:"فكك الجبل",m:"ا ل ج ب ل"},
        {n:"فكك هضبة",m:"ه ض ب ة"},
        {n:"فكك خواطر",m:"خ و ا ط ر"},
        {n:"فكك ارحبو",m:"ا ر ح ب و"},
        {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"فكك احبك",m:"ا ح ب ك"},
        {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
        {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"فكك الو محد",m:"ا ل و م ح م د"},


   ];


   client.on("message", async message => {
	   
    if(message.content == prefix+"fkk"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('لعبة فكك')
        .setAuthor(message.author.username, message.author.avatarURL)
                              .setColor('#36393e') 
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
                                   .setColor('#36393e') 
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
                                   .setColor('#36393e') 
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});





   client.on("message", async message => {

var aoasm =[
    {q:"ما عاصمة **المغرب**",a:"الرباط"},
    {q:"ما عاصمة **افغانستان**",a:"كبل"},
    {q:"ما عاصمة ** البانيا**",a:"تيران"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلادش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
    {q:"ما عاصمة **قطر  **",a:"الدوحة"},
    {q:"ما عاصمة **السعودية  **",a:"الرياض"},
    {q:"ما عاصمة **سوريا  **",a:"دمشق"},
    {q:"ما عاصمة **تركيا  **",a:"انقرة"},
    {q:"ما عاصمة **العراق  **",a:"بغداد"},
    {q:"ما عاصمة **البنان  **",a:"بيروت"},
    {q:"ما عاصمة **فلسطين  **",a:"القدس"},
    {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
    {q:"ما عاصمة **الاردن  **",a:"عمان"},
    {q:"ما عاصمة **السودان  **",a:"خرطوم"},
    {q:"ما عاصمة **المانيا  **",a:"برلين"},
    {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
    {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
   ];
    if(message.content == prefix+"capitals"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("There is an active session right now, Please wait.");
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('Capitals.')
        .setAuthor(message.author.username, message.author.avatarURL)
                              .setColor('#36393e') 
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: Correct!')
             .setAuthor(message.author.username, message.author.avatarURL)
                                   .setColor('#36393e') 
             .setDescription(`**${result.author.username}**, Correct Answer`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x: Wrong')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}**, Wrong Answer`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});


client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content.startsWith(prefix + "avatar")) {
        let user = message.mentions.users.first();
        if(!user) {
            user = message.author;
        }
          const embed1 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#36393e') 
    .setImage(user.avatarURL)
    .setTimestamp();

   message.channel.sendEmbed(embed1);
      }
      if(message.content.startsWith(prefix + "image")) {
          const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor('#36393e') 
    .setImage(message.guild.iconURL)
    .setTimestamp();

   message.channel.sendEmbed(embed);
      }
  });


const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
	   
   if (message.content.startsWith(prefix + "tweet")) {
                if(!message.channel.guild) return message.channel.send('** This command only for servers**');
  var embed = new Discord.RichEmbed()
                        .setColor('#36393e') 
   .setThumbnail(message.author.avatarURL)
 .addField('-' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

   client.on('message',function(message) {
  if (message.author.bot) return;

                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
client.on('message' , message => {
    
if(message.content.startsWith(prefix+"User")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'لا يلعب حاليا.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'لم يرسل رسالة. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`معلومات ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });

	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("الرجاء اختيار رقم")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });

var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id;//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix + "itwy"){

          try{
  //body
  }catch(e){

  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')

        let blueFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;


    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });


    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));

        })

 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));

        })

                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });


client.on('message' , message => {


if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("410778583682777098").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By Moorz")


message.channel.send(embed);


}

});

client.on('message', async message => {
    let args = message.content.split(" ").slice(1)

if (message.content.split(" ")[0].toLowerCase() === prefix + "tempban") {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
 
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;


      let mention = message.mentions.members.first();
      if(!mention) return message.channel.send('Error : `Mention a User`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.channel.send('Error : ` You Cann’t Ban User Have Higher Rank Than You ` ').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.channel.send('Error : ` I Cann’t Ban User Have Higher Rank Than Me ` ').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.channel.send('Error : \` You Cannot Ban Your Self \`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = message.content.split(" ").slice(2).join(" ");
       if(!duration) return message.channel.send('Error :\` Type The Ban Duration \` ').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.channel.send('Error : `Invaild Duration`').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       mention.ban({
         reason: reason,
       });
       message.channel.send(`** ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 3600000);

   }
});

 client.on('message', async message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send('Mention a User').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.channel.send("I Can’t Ban This User").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});


client.on('message', async message => {
 if(!message.channel.guild) return;
  if (message.author.kick) return;
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("Mention a User").then(message => message.delete(4000))
  if(!reason) return message.channel.send ("Supply a Reason").then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.channel.send("I Can’t Kick This User").then(message => message.delete(4000))

  message.guild.member(user).kick(7, user);
  message.channel.send(`${user.tag} Has Been Kicked`).then(message => message.delete(10000))
}
});


client.on('message', message => {

       if(message.content === prefix + "mutec") {
                           if(!message.channel.guild) return message.channel.send('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.channel.send("**__Chat Has Been Locked.__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutec") {
                        if(!message.channel.guild) return message.channel.send('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.channel.send("**__Chat Has Been Unlocked.__:white_check_mark:**")
              });
    }

});
client.on("message", msg => {
  if(msg.content === prefix + '' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| Name :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| ID :", `${msg.author.id}`, true)
                                .setColor('#36393e') 
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| Status :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| Game :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| Roles : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| Created At :', `${msg.createdAt}`,true)
          .addField('🤖| Type', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        if(!message.guild.member(message.author.id).hasPermission("MANAGE_GUILD")) return;
        message.guild.fetchBans().then(bans => {
            let banz = bans.map(m => `${m}`).join("\n");
            const ban = new Discord.RichEmbed()
                                      .setColor('#36393e') 
                .setTitle(`**${bans.size} Bans.**`)
                .setDescription(`**${banz}**`)
                message.channel.sendEmbed(ban);
        });
    }
});


client.on('message', message => {
        if (message.content === prefix + "inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=489909153368768523&permissions=8&scope=bot`)
     message.channel.sendEmbed(embed);
       }
   });










client.on("message", (message) => {
if (message.content.startsWith(prefix + "setText")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
        let p = message.channel.parent;
        if(!p) {
            message.guild.createChannel("...", "category").then(mmm => {
                p = mmm;
            });
        }
    message.guild.createChannel(args.join(' '), 'text').then(c => {
c.setParent(p);
message.channel.sendMessage(`:white_check_mark: | ${c} .`);
    });

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + "setVoice")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    let p = message.channel.parent;
    if(!p) {
        message.guild.createChannel("...", "category").then(mmm => {
            p = mmm;
        });
    }
    message.guild.createChannel(args.join(' '), 'voice').then(c => {
        c.setParent(p);
    });
    message.channel.sendMessage(':white_check_mark: .')

}
});



client.on('message', message => {
    if (message.content === 'هاي') {
        message.channel.send('♪ هــأايات أطلـَـق ولكــم☆');
      }
});




client.on('message', message => {
    if (message.content.startsWith('.')) {
        message.channel.send('♪ أطلـَـق من نقط, يلــبى بس ☆');
      }
});





client.on("message", (message) => {
    if (message.content.startsWith(prefix + 'dchannel')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Err: `PERMISSIONS_MISSING`.");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.channel.send('**Err: `CHANNEL_MISSING`.*').catch(console.error);
        channel.delete();
    }
});



client.on('message',message =>{
    
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];

  i.forEach(inv =>{
    var [invs,i]=[{},null];

    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

  });
  var embed = new Discord.RichEmbed()
                        .setColor('#36393e') 
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });

  });

    }
  });











client.on('message', message => {
    if(message.content.includes('discord.gg')){
        if(!message.channel.guild) return message.channel.send('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.channel.send(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});

const category = "531818309663064096";
const devs     = ["410778583682777098"];
let mtickets   = true;
let tchannels  = [];
let current    = 0;

client.login(process.env.EX_TOKEN);

client.on('ready',async () => console.log(`   - " ${client.user.username} " , Tickety is ready to work.`));
client.on('message',async message => {
    const emojis   = { yes: `${client.guilds.find(r => r.id === '439182014231347210').emojis.find(e => e.name === 'Yes')}`, wrong: `${client.guilds.find(r => r.id === '439182014231347210').emojis.find(e => e.name === 'Wrong')}` };
    if(message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let author = message.author.id;
    if(args[0].toLowerCase() === `${prefix}ticket`) {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setColor("#36393e")
            .addField(`❯ لعمل تكت, \`${prefix}new\``, `» Syntax: \`${prefix}new [Reason]\`\n» Description: **لعمل روم فقط يظهر لك ولأدارة السيرفر.**`)
            .addField(`❯ قائمة الأوامر, \`${prefix}help\``, `» Syntax: \`${prefix}help\`\n» Description: **يظهر لك جميع اوامر البوت.**`)
            .addField(`❯ لإيقاف الأعضاء من عمل تكتات, \`${prefix}mtickets\``, `» Syntax: \`${prefix}mtickets [Disable/Enable]\`\n» Description: **لجعل جميع اعضاء السيرفر غير قادرون على عمل تكت.**`)
		 	.addField(`❯ لأقفال جميع التكتات المفتوحة, \`${prefix}deletetickets\``, `» Syntax: \`${prefix}deletetickets\`\n» Description: **لمسح جميع رومات التكتات المفتوحة في السيرفر**`)
            .addField(`❯ لقفل التكت المفتوح, \`${prefix}close\``, `» Syntax: \`${prefix}close\`\n» Description: **لأقفال تكت.**\n\n للمزيد من المعلومات تواصل مع احد ادارة السيرفر .`)
            await message.channel.send(`${emojis.yes}, **هذه قائمة بجميع اوامر البووت.**`);
            await message.channel.send(embed);
    } else if(args[0].toLowerCase() === `${prefix}new`) {
        if(mtickets === false) return message.channel.send(`${emojis.wrong}, **تم ايقاف هذه الخاصية من قبل احد ادارة السيرفر**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emojis.wrong}, **البوت لا يملك صلاحيات لصنع الروم**`);
		console.log(current);
		let openReason = "";
		current++;
    	message.guild.createChannel(`exticket-${current}`, 'text').then(c => {
		tchannels.push(c.id);
		c.setParent(category);
		message.channel.send(`${emojis.yes}, **تم عمل التكت.**`);
		c.overwritePermissions(message.guild.id, {
			READ_MESSAGES: false,
			SEND_MESSAGES: false
		});
		c.overwritePermissions(message.author.id, {
			READ_MESSAGES: true,
			SEND_MESSAGES: true
		});
		
		if(args[1]) openReason = `\nسبب فتح التكت , " **${args.slice(1).join(" ")}** "`;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor("#36393e")
		.setDescription(`**انتظر قليلا الى حين رد الادارة عليك**${openReason}`);
		c.send(`${message.author}`);
		c.send(embed);
	});
    } else if(args[0].toLowerCase() === `${prefix}mtickets`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(`${emojis.yes}, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`${emojis.yes}, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(`${emojis.yes}, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`${emojis.yes}, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
			}
		}
    } else if(args[0].toLowerCase() === `${prefix}close`) {
		if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`${emojis.wrong}, **هذا الروم ليس من رومات التكت.**`);
		
		message.channel.send(`${emojis.yes}, **سيتم اغلاق الروم في 3 ثواني من الاَن.**`);
		tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
		setTimeout(() => message.channel.delete(), 3000);
	} else if(args[0].toLowerCase() === `${prefix}restart`) {
		if(!devs.includes(message.author.id)) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`);
		message.channel.send(`${emojis.yes}, **جارى اعادة تشغيل البوت.**`);
		client.destroy();
		client.login(process.env.EX_TOKEN);
	} else if(args[0].toLowerCase() === `${prefix}deletetickets`) {
		let iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`${emojis.yes}, **تم مسح \`${iq}\` من التكتات.**`);
			}
		}
	}
});

// ❯ , »



client.on("message", message => {
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1).join(" ");

if(!message.channel.guild) return;
if(message.author.bot) return;
if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return;

if(command == "setVo") {
if(!args[0]) {
    return message.channel.send("Please provide a name that contains \`00\`.");
}
if(!args.includes("00")) {
    return message.channel.send("Please provide a name that contains \`00\`.");
}
var name = args.replace("00", message.guild.members.filter(a => a.voiceChannel).size);
message.guild.createChannel(name, "voice").then(vc => {
vc.overwritePermissions(message.guild.id, {
    CONNECT: false
});
vc.setPosition(1);
client.on("ready", async() => {
setInterval(() => {
vc.setName(name);
}, 1000);
});
});
}
if(command == "setMc") {
    if(!args[0]) {
        return message.channel.send("Please provide a name that contains \`00\`.");
    }
    if(!args.includes("00")) {
        return message.channel.send("Please provide a name that contains \`00\`.");
    }
    var name = args.replace("00", message.guild.memberCount);
    message.guild.createChannel(name, "voice").then(vc => {
    vc.overwritePermissions(message.guild.id, {
        CONNECT: false
    });
    vc.setPosition(1);
    client.on("ready", async() => {
    setInterval(() => {
    vc.setName(name);
    }, 1000);
    });
    });
}
});

client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if(!message.channel.guild) return;
           let roleName = message.content.split(" ").slice(2).join(" ");
    
                if(command == "role") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    let Target = message.mentions.users.first();
                        if(!Target) return message.channel.send("Please select someone.");
                        if(!roleName) {
                            return message.channel.send("Please provide a role name.");
                        }
                                    let role = message.guild.roles.find(r => r.name.includes(roleName));
                                        if(!role) return message.channel.send(`Couldn't find the role with the name **"${roleName}"**.`);
                                            if(message.guild.member(message.author.id).highestRoless < role) return message.channel.send(`**${role.name}** role is higher than your highest role.`);
                                            if(message.guild.member(Target.id).roles.has(role)) return message.channel.send(`**${Target.username}** already has the **${role.name}** role.`);
                                                message.channel.send(`**${Target.username}** Has been given the **${role.name}** role. :first_place:`);
                                            message.guild.member(Target.id).addRole(role);
                                                    }
                                                    if(command == "roleremove") {
                                                        let Target = message.mentions.users.first();
                                                            if(!Target) return message.channel.send("Please select someone.");
                                                            if(!roleName) {
                                                                return message.channel.send("Please provide a role name.");
                                                            }
                                                                        let role = message.guild.roles.find(r => r.name.includes(roleName));
                                                                            if(!role) return message.channel.send(`Couldn't find the role with the name **"${roleName}"**.`);
                                                                                if(message.guild.member(message.author.id).highestRole < role) return message.channel.send(`**${roleName}** role is higher than your highest role.`);
                                                                                if(!message.guild.member(Target.id).roles.has(role)) return message.channel.send(`**${rolename}** Has been already removed from **${Target.username}**.`);
                                                                                    message.channel.send(`**${Target.username}** Has been given the **${roleName}** role. :first_place:`);
                                                                                message.guild.member(Target.id).removeRole(role);
                                                                                        }
                if(command == "role all") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    let = roleName = command.slice(1);
                    if(!roleName) {
                        return message.channel.send("Please provide a role name.");
                    }
                 let role = message.guild.roles.find(r => r.name.includes(roleName));
                     if(!role) return message.channel.send(`Couldn't find the role with the name **"${roleName}"**.`);
                     if(message.guild.member(message.author.id).highestRole < role) return message.channel.send(`**${role.name}** role is higher than your highest role.`);
                        message.guild.members.forEach(Target => {
                            if(Target.roles.has(role)) {
                                return message.channel.send(`All members in this server already has **${role.name}** role.`);
                            }
 
                            message.guild.member(Target.id).addRole(role);
                            
                                message.channel.send(`**${roleName}** role has been given **0** members.`).then(count => {
                                    setInterval(() => {
                                    count.edit(`**${roleName}** role has been given to **${message.guild.members.filter(m => m.roles.has(role)).size}** members.`);
                                    }, 1000);
    
                                });
    
                        });
    
                }
                if(command == "role members") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    let = roleName = command.slice(1);
                    if(!roleName) {
                        return message.channel.send("Please provide a role name.");
                    }
                 let role = message.guild.roles.find(r => r.name.includes(roleName));
                     if(!role) return message.channel.send(`Couldn't find the role with the name **"${role.name}"**.`);
                     if(message.guild.member(message.author.id).highestRole < role) return message.channel.send(`**${role.name}** role is higher than your highest role.`);
                        message.guild.members.filter(m => !m.user.bot).forEach(Target => {
                            if(Target.roles.has(role)) {
                                return message.channel.send(`All members in this server already has **${role.name}** role.`);
                            }
                            message.guild.member(Target.id).addRole(role);
                            
                                message.channel.send(`**${role.name}** role has been given **0** members.`).then(count => {
                                    setInterval(() => {
                                    count.edit(`**${role.name}** role has been given to **${message.guild.members.filter(m => !m.user.bot && m.roles.has(role)).size}** members.`);
                                    }, 1000);
    
                                });
    
                        });   
                }
                if(command == "role bots") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    if(!roleName) {
                        return message.channel.send("Please provide a role name.");
                    }
                 let role = message.guild.roles.find(r => r.name.includes(roleName));
                     if(!role) return message.channel.send(`Couldn't find the role with the name **"${roleName}"**.`);
                     if(message.guild.member(message.author.id).highestRole <= role) return message.channel.send(`**${roleName}** role is higher than your highest role.`);                
                        message.guild.members.filter(m => m.user.bot).forEach(Target => {
                            if(Target.roles.has(role)) {
                                return message.channel.send(`All members in this server already has **${roleName}** role.`);
                            }

                            message.guild.member(Target.id).addRole(role);
                                message.channel.send(`**${roleName}** role has been given **0** members.`).then(count => {
                                    setInterval(() => {
                                    count.edit(`**${roleName}** role has been given to **${message.guild.members.filter(m => m.user.bot && m.roles.has(role)).size}** members.`);
                                    }, 1000);
    
                                });
    
                        });   
                }
                if(command == "rlist") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    let roles = message.guild.roles.map(c => `${c.name.replace("`", "?")} - ${c.members.size} members`).join("\n");
                    message.channel.send(`**${message.guild.name} Roles List.**\n\`\`\`\n${roles}\n\`\`\`\n:shield: Note: \`\?\` stands for the unvaild symbols. `);
                }

                if(command == "rinfo") {
                    if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return;
                    moment.locale("en-sa");
                    let = roleName = message.content.split(" ").slice(1).join(" ");
                    if(!roleName) {
                        return message.channel.send("Please provide a role name.");
                    }
                 let role = message.guild.roles.find(r => r.name.includes(roleName));
                     if(!role) return message.channel.send(`Couldn't find the role with the name **"${roleName}"**.`);
                        const roleInfo = new Discord.RichEmbed()
                                                  .setColor('#36393e') 
                            .setTitle(`**${role.name} Role Informations:**`, true)
                            .setDescription(`**Name:**\n${role.name}\n\n**Members:**\n${role.members.filter(z => !z.user.bot).size || "0"} members and ${role.members.filter(z => z.user.bot).size || "0"} bots.. ( ${role.members.size || "0"} )\n\n**Created at:**\n${moment(role.createdAt).format("D/M/YYYY h:mm")} - ${moment(role.createdAt).fromNow()}\n\n**Position:**\n${role.calculatedPosition}`)
                            .setFooter(message.guild.name, message.guild.icon)
                            .setTimestamp();
                            message.channel.sendEmbed(roleInfo);
                            
                    }
                
                if(command == "roles") {
                    message.react("🔧");
                    const roles = new Discord.RichEmbed()
                                              .setColor('#36393e') 
                        .setTitle("**Roles Management Commands:**", true)
                        .setDescription(`\`${prefix}role <User> <Role>\` » To give a single member a role.\n\`${prefix}roleremove <User> <Role>\` » To remove a role from a single member.\n\`${prefix}role all <Role>\` » To give everyone in this server a role.\n\`${prefix}role members <Role>\` » To give every member (Without Bots) in this server a role.\n\`${prefix}role bots <Role>\` » To give every bot in this server a role.\n\`${prefix}rList\` » To show a list of all roles in this server and how much members has it.\n\`${prefix}rInfo <Role>\` » To show some information about the role you select.`)
                        .setFooter(message.author.username, message.author.displayAvatarURL)
                        .setTimestamp();
                        message.channel.send(`**All commands below are created and scripted by .Moorz**`, {embed: roles});
                }
            });

              client.on('voiceStateUpdate', (oldM, newM) => {
                let m1 = oldM.serverMute;
                let m2 = newM.serverMute;
                let d1 = oldM.serverDeaf;
                let d2 = newM.serverDeaf;
              
                let ch = oldM.guild.channels.find('name', 'log')
                if(!ch) return;
              
                  oldM.guild.fetchAuditLogs()
                  .then(logs => {
              
                    let user = logs.entries.first().executor.username
              
                  if(m1 === false && m2 === true) {
                     let embed = new Discord.RichEmbed()
                     .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
                     .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
                     .setColor('#36393e')
                      .setTimestamp()
                     ch.send(embed)
                  }
                  if(m1 === true && m2 === false) {
                     let embed = new Discord.RichEmbed()
                     .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
                     .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
                     .setColor('#36393e')
                     .setTimestamp()
                     ch.send(embed)
                  }
                  if(d1 === false && d2 === true) {
                     let embed = new Discord.RichEmbed()
                     .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
                     .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
                     .setColor('#36393e')
                     .setTimestamp()
              
                     ch.send(embed)
                  }
                  if(d1 === true && d2 === false) {
                     let embed = new Discord.RichEmbed()
                     .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
                     .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
                     .setColor('#36393e')
                     .setTimestamp()
              
                     ch.send(embed)
                  }
                })
              })
              
              
                client.on('messageUpdate', (message, newMessage) => {
                  if (message.content === newMessage.content) return;
                  if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
                  const channel = message.guild.channels.find('name', 'log');
                  if (!channel) return;
               
                  let embed = new Discord.RichEmbed()
                     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
              .setTitle(' تــعــديــل رســالــه  :  ')
              .addField('قــبــل الــتــعــديــل',`${message.cleanContent}`)
              .addField(' بــعــد  الــتــعــديــل ',`${newMessage.cleanContent}`)
              .addField(' عــدلــت فــي  ',`<#${message.channel.id}>`)
              .addField(' يــواســطــه  ', `<@${message.author.id}> `)
              .setColor('#36393e')
                     .setTimestamp();
                   channel.send({embed:embed});
               
               
              });
               
              client.on('guildMemberAdd', member => {
                  if (!member || !member.id || !member.guild) return;
                  const guild = member.guild;
                 
                  const channel = member.guild.channels.find('name', 'log');
                  if (!channel) return;
                  let memberavatar = member.user.avatarURL
                  const fromNow = moment(member.user.createdTimestamp).fromNow();
                  const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
                 
                  let embed = new Discord.RichEmbed()
                     .setAuthor(`${member.user.tag}`, member.user.avatarURL)
                     .setColor('#36393e')
                     .setDescription(` <@${member.user.id}>  انــضــم لــلــســيــرفــر `)
                     .setTimestamp();
                   channel.send({embed:embed});
              });
               
              client.on('guildMemberRemove', member => {
                  if (!member || !member.id || !member.guild) return;
                  const guild = member.guild;
                 
                  const channel = member.guild.channels.find('name', 'log');
                  if (!channel) return;
                  let memberavatar = member.user.avatarURL
                  const fromNow = moment(member.joinedTimestamp).fromNow();
                 
                  let embed = new Discord.RichEmbed()
                     .setAuthor(`${member.user.tag}`, member.user.avatarURL)
                     .setColor('#36393e')
                     .setDescription(` <@${member.user.id}>  خــرج مــن الــســيــرفــر `)
                     .setTimestamp();
                   channel.send({embed:embed});
              });
               
              client.on('messageDelete', message => {
                  if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
                  const channel = message.guild.channels.find('name', 'log');
                  if (!channel) return;
                 
                  let embed = new Discord.RichEmbed()
                     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
               .setTitle('  مــســح رســالــه  :   ')
               .addField('  الــرســالــه  ',`${message.cleanContent}`)
               .addField('  مــســحــت فــي  ',`<#${message.channel.id}>`)
               .addField(' بــواســطــــــه  ', `<@${message.author.id}> `)
                     .setColor('#36393e')
                     .setTimestamp();
                   channel.send({embed:embed});
               
              });
              
                   
                    client.on("roleDelete", role => {
                client.setTimeout(() => {
                  role.guild.fetchAuditLogs({
                      limit: 1,
                      type: 30
                    })
                    .then(audit => {
                      let exec = audit.entries.map(a => a.executor.username)
                      try {
              
                        let log = role.guild.channels.find('name', 'log');
                        if (!log) return;
                        let embed = new Discord.RichEmbed()
                          .setColor('#36393e')          
                          .setTitle('-  مــســح رتــبــه ')
                          .addField(' اســم الــرتــبــه  ', role.name, true)
                          .addField(' هــويــة الــرتــبــه ', role.id, true)
                          .addField(' لــون الــرتــبــه ', role.hexColor, true)
                          .addField(' بــواســطــه ', exec, true)
                          .setColor('#36393e') 
                          .setTimestamp()
                          
                        log.send(embed).catch(e => {
                          console.log(e);
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    })
                }, 1000)
              })
              
              
              client.on('roleCreate', role => {
                client.setTimeout(() => {
                  role.guild.fetchAuditLogs({
                      limit: 1,
                      type: 30
                    })
                    .then(audit => {
                      let exec = audit.entries.map(a => a.executor.username)
                      try {
              
                        let log = role.guild.channels.find('name', 'log');
                        if (!log) return;
                        let embed = new Discord.RichEmbed()
                          .setTitle('+  انــشــاء رتــبــه ')
                          .addField(' اســم الــرتــبــه  ', role.name, true)
                          .addField(' هــويــة الــرتــبــه ', role.id, true)
                          .addField(' لــون الــرتــبــه ', role.hexColor, true)
                          .addField(' بــواســطــه ', exec, true)
                          .setColor('#36393e') 
                          .setTimestamp()
                          
                        log.send(embed).catch(e => {
                          console.log(e);
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    })
                }, 1000)
              })
              
              
              
              
                client.on("guildBanAdd", (guild, member) => {
                client.setTimeout(() => {
                  guild.fetchAuditLogs({
                      limit: 1,
                      type: 22
                    })
                    .then(audit => {
                      let exec = audit.entries.map(a => a.executor.username);
                      try {
                        let log = guild.channels.find('name', 'log');
                        if (!log) return;
                        client.fetchUser(member.id).then(myUser => {
                        let embed = new Discord.RichEmbed()
                      .setAuthor("حــظــر عــضــو :  ")
                      .setColor('#36393e') 
                      .setThumbnail(myUser.avatarURL)
                      .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
                      .addField('  بــواســطــه ',`**${exec}**`,true)
                      .setFooter(myUser.username,myUser.avatarURL)
                          .setTimestamp();
                        log.send(embed).catch(e => {
                          console.log(e);
                        });
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    });
                }, 1000);
              });
              
              
              
                  client.on("guildBanRemove", (guild, member) => {
                client.setTimeout(() => {
                  guild.fetchAuditLogs({
                      limit: 1,
                      type: 22
                    })
                    .then(audit => {
                      let exec = audit.entries.map(a => a.executor.username);
                      try {
                        let log = guild.channels.find('name', 'log');
                        if (!log) return;
                        client.fetchUser(member.id).then(myUser => {
                        let embed = new Discord.RichEmbed()
                      .setAuthor("  فــك حــظــر عــن عــضــو ")
                      .setColor('#36393e') 
                       .setThumbnail(myUser.avatarURL)
                      .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
                      .addField(' بــواســطــه ',`**${exec}**`,true)
                      .setFooter(myUser.username,myUser.avatarURL)
                          .setTimestamp();
                        log.send(embed).catch(e => {
                          console.log(e);
                        });
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    });
                }, 1000);
              });

              const invites = {};

              const wait = require('util').promisify(setTimeout);
              
              client.on('ready', () => {
                wait(1000);
              
                client.guilds.forEach(g => {
                  g.fetchInvites().then(guildInvites => {
                    invites[g.id] = guildInvites;
                  });
                });
              });
              
              client.on('guildMemberAdd', member => {
                member.guild.fetchInvites().then(guildInvites => {
                  const ei = invites[member.guild.id];
                  invites[member.guild.id] = guildInvites;
                  const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
                  const inviter = client.users.get(invite.inviter.id);
                  const logChannel = member.guild.channels.find(channel => channel.id === "471786359229513748");
                  if(!logChannel) return;
                  setTimeout(() => {
                      logChannel.send(`**Name: ${member} , By: <@${inviter.id}> .**`);
                  }, 1000);
                });
              });
              

                

client.login(process.env.EX_TOKEN);
