const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://towngamesv.glitch.me/`);
}, 280000);

const Discord = require('discord.js');  
const client = new Discord.Client();  
const moment = require('moment');
const zalgo = require('zalgolize');  
const math = require('math-expression-evaluator');   
const figlet = require('figlet');   
const fs = require('fs');  
const ms = require('ms');  
const prefix = '-'

//-------------------------------------------------------------------------------//

//الحالة
const activity = [
    "Stay Home | -help", 
    "By : Musab.", 
    "Call Of Duty",
    "Minecraft",
    "KFC",
    "Hungry",
    "For Commands Use | -help",
    "EmpireBot.",
    "1",
    "⚙️",
    "😘",
    "sleep",
    "iphone",
    "hi",
    "bye",
    "1+1=3",
    "55+50=555🤪",
    "🤪",
];

client.on("ready", function (){
    console.log(`${client.user.username} Is now active`);
    let i = 0;


    setInterval(()=>{
        const index = Math.floor(i);
    client.user.setActivity(activity[index],{type:"PLAYING"});
    i = i + 1;
    if(i === activity.length) i = i - activity.length;

    },5000)
})

//-------------------------------------------------------------------------------//

//أمر ping
client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//Professional Codes
 })
  }  
 });

//-------------------------------------------------------------------------------//

client.on("message", message => {
  if (message.content === prefix + "hep") {////هنا  الامر
           message.react("✅")
              message.react("❌")
     const embed = new Discord.RichEmbed() 
         .setColor("#ff0000")
         .setDescription(`
**- تعريف البوت 
1- بوت العاب ب أوامر مميزة
2- شغال 24 ساعة
3- مصنوع بواسطة <@616709497817268281> **
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
**〘<:tingames:761169952853458944> I  البرفكس الخاص بالبوت هو [-] 〙
〘<:tingames:761169952853458944> I الأوامر الخاصه بالبوت : 
            ・・・・・・・・・・・・・・・・・・
〘<:tingames:761169952853458944> I ${prefix}كت , كت تويت , cut 〙
〘<:tingames:761169952853458944> I ${prefix}حكم 〙
〘<:tingames:761169952853458944> I ${prefix}جمع , اجمع 〙
〘<:tingames:761169952853458944> I ${prefix}طرح , اطرح 〙
〘<:tingames:761169952853458944> I ${prefix}ضرب 〙
〘<:tingames:761169952853458944> I ${prefix}اسرع , سرعة 〙
〘<:tingames:761169952853458944> I ${prefix}فكك , fkk 〙
〘<:tingames:761169952853458944> I ${prefix}صراحة , sra7a 〙
〘<:tingames:761169952853458944> I ${prefix}سؤال , اسئلة 〙
〘<:tingames:761169952853458944> I ${prefix}عواصم 〙
〘<:tingames:761169952853458944> I ${prefix}xo 〙**
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●

    `)
.setFooter("Made By Musab || Arab Empire")

      message.author.sendEmbed(embed)
      
      }
}); 


//-------------------------------------------------------------------------------//


client.on('message', wolf => {
  if (wolf.content === prefix + "heffp") {////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("RED")////لون الامبد
.setDescription(`
- تعريف البوت 
1- بوت العاب ب أوامر مميزة
2- شغال 24 ساعة
3- مصنوع بواسطة <@616709497817268281>
            ・・・・・・・・・・・・・・・・・・
**〘<:tingames:761169952853458944> I  البرفكس الخاص بالبوت هو [-] 〙
〘<:tingames:761169952853458944> I الأوامر الخاصه بالبوت : 
            ・・・・・・・・・・・・・・・・・・
〘<:tingames:761169952853458944> ${prefix}كت , كت تويت , cut 〙
〘<:tingames:761169952853458944> ${prefix}حكم 〙
〘<:tingames:761169952853458944> ${prefix}جمع , اجمع 〙
〘<:tingames:761169952853458944> ${prefix}طرح , اطرح 〙
〘<:tingames:761169952853458944> ${prefix}ضرب 〙
〘<:tingames:761169952853458944> ${prefix}اسرع , سرعة 〙
〘<:tingames:761169952853458944> ${prefix}فكك , fkk 〙
〘<:tingames:761169952853458944> ${prefix}صراحة , sra7a 〙
〘<:tingames:761169952853458944> ${prefix}سؤال , اسئلة 〙
〘<:tingames:761169952853458944> ${prefix}عواصم 〙
〘<:tingames:761169952853458944> ${prefix}xo ====> xo لعبة 〙**`)////هنا الاوامر
.setFooter("**Made By Musab || Arab Empire**")
wolf.channel.send({embed:embed});
}
});

//-------------------------------------------------------------------------------//

//لعبة جمع
client.on('message', message => {
  if (message.content.startsWith(prefix + 'جمع')) {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"1000+2=?",
"232+21=?",
"12+23=?", 
                
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10002",
  "253",
  "35",
                  
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يحل جمع : __**${x[x3]}**_
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بحل جمع في الوقت المناسب  `);
        })
        })
    }
})


//لعبة ضرب
client.on('message', message => {
  if (message.content.startsWith(prefix + 'ضرب')) {
        var x = ["9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['81',
        "72",
        "16",
        "42",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يحل ضرب :  __**${x[x3]}**__
لديك 20 ثانية لحل ضرب`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
        })
        })
    }
})

//لعبة طرح
client.on('message', message => {
    if(message.content.startsWith(prefix + 'طرح') || message.content.startsWith(prefix + 'اطرح')) { 
        var x = ["4326-2345=?",
"5822-8547=?",
"543-823=?",
"1500-500=?",
"4322-2768=?",
"5652-1255=?",
"3421-11234=?",
"34545-1233=?",
"23456-54332=?",
"2312-3433=?",
"4321-321=?",
"7-5=?",
"9-8=?",
"100-9=?",
"99-9=?",
"100-11=?",
"55-5=?",
"111-13=?",
"1000-555=?",
"205-103=?",
"21-15=?",
];
        var x2 = ['1981',
        "-2725",
        "-280",
        "1000",
"1554",
"4397",
"-7813",
"33312",
"-30876",
"1121",
"4000",
        "2",
        "1",
        "91",
"90",
"89",
"50",
"98",
"445",
"102",
"6",

        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يكتب حل صح :  __**${x[x3]}**__
لديك 20 ثانية لكتابة حل صحيح`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل في الوقت المناسب  `);
        })
        })
    }
})

//لعبة حكم
 const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
    '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل على شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'

 ]
  client.on('message', message => {
    var prefix = '-';
    if(message.content.startsWith(prefix + 'حكم') || message.content.startsWith(prefix + 'احكم')) { 
   var mariam= new Discord.RichEmbed()
   .setTitle("لعبة حكم ..")
   .setColor('ffffff')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });

//لعبة كت تويت
 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
     '‏كت تويت | كم عمرك ؟',
     '‏كت تويت | اسم تحب الكل يناديك فيه ؟',
     '‏كت تويت | تاريخ تحبه ؟',
     '‏كت تويت | يوم من أيام الأسبوع تحبه ؟',
     '‏كت تويت | أحلى مطعم عندك ؟',
     '‏كت تويت | أفضل سنه دراسية عندك ؟',
     '‏كت تويت | أفضل مغني تحبه ؟',
     '‏كت تويت | نوم ولا أكل ؟',
     '‏كت تويت | الحباة ما تمشي بدون ؟',
     '‏كت تويت | حساب لازم تتابعه كل يوم ؟',
     '‏كت تويت | تاريخ ما تنساه ؟',
     '‏كت تويت | عندك استعداد تخسر كل شيء الا ؟',
     '‏كت تويت | منشن لـ اقرب شخص لك بالدسكورد ؟',
]
 
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'كت') || message.content.startsWith(prefix + 'cut')|| message.content.startsWith(prefix + 'كت تويت')) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('ffffff')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

//لعبة صراحة
const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
	 'صراحه | نفسك فـ ايه ؟',
	 'صراحه | هل تحب فتاه او احببت من قبل ؟',
	 'صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟',
	 'صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟',
	 'صراحه | هل تحب مدرستك ؟',
	 'صراحه | ما الشئ الذي تتمني ان يحصل ؟',
	 'صراحه | هل تحب عائلتك ؟',
]
   client.on('message', message => {
       if (message.author.bot) return;
    if(message.content.startsWith(prefix + 'صراحة') || message.content.startsWith(prefix + 'صراحه') || message.content.startsWith(prefix + 'sra7a')) { 
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('ffffff')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://s3-eu-west-1.amazonaws.com/content.argaamnews.com/e6d28fe9-fc9b-4094-85e0-22b5b0ab308e.jpg")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

//حجره ورقة مقص
client.on("message", function(message) {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'rps')) { 
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
        msg.react('🇷')
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

//لعبة الأسئلة
client.on('message', message => {
    if(message.content.startsWith(prefix + 'سؤال') || message.content.startsWith(prefix + 'اسئلة') || message.content.startsWith(prefix + 'اسئله')) { 
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

//لعبة عواصم
client.on('message', message => {
    if (message.content == "-عواصم"){
        var x = ["**ما عاصمة اليابان**",
   "**ما عاصمة روسيا**",
   "**ما عاصمة كوريا الجنوبية**",
   "**ما عاصمة المكسيك**",
   "**ما عاصمة  إندونيسيا**",
   "**ما عاصمة  بيرو**",
   "**ما عاصمة  الصين**",
   "**ما عاصمة مصر**",
   "**ما عاصمة السعودية**",
   "**ما عاصمة العراق**",
   "**ما عاصمة كولومبيا**",
   "**ما عاصمة هونغ كونغ**",
   "**ما عاصمة تركيا**",
   "**ما عاصمة فلسطين**",
   "**ما عاصمة امريكا**",
   "**ما عاصمة المانيا**",
   "**ما عاصمة البرازيل**",
   "**ما عاصمة إسبانيا**",
   "**ما عاصمة الأرجنتين**",
   "**ما عاصمة سوريا**",
   "**ما عاصمة إيطاليا**",
   "**ما عاصمة فرنسا**",
   "**ما عاصمة المغرب**",
   "**ما عاصمة السودان**",
   "**ما عاصمة لبنان**",
   "**ما عاصمة الجزائر**",
   "**ما عاصمة اليمن**",
];
        var x2 = ['طوكيو',
        "موسكو",
        "سيؤول",
      "مكسيكو سيتي",
"جاكارتا",
"ليما",
"بكين",
"القاهرة",
      "الرياض",
      "بغداد",
      "بوغوتا",
    "هونغ كونغ",
      "أنقرة",
    "القدس",
  "واشنطن",
    "برلين",
  "برازيليا",
"مدريد",
      "بيونس أيرس",
      "دمشق",
      "روما",
    "باريس",
      "الرباط",
    "الخرطوم",
  "بيروت",
    "الجزائر",
  "صنعاء", 
  
        
        ];

        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب عاصمة صح :  __**${x[x3]}**__
لديك 20 ثانية لكتابة عاصمة صحيحة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة عاصمة صح في الوقت المناسب  `);
        })
        })
    }
})

//لعبة فكك
client.on('message', message => {
    if(message.content.startsWith(prefix + 'fkk') || message.content.startsWith(prefix + 'فكك')) {
        var x = ["محمد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"رياضيات",
"بسم الله الرحمن الرحيم",
"طماطم",
"سيرفر",
"دسكورد",
"خالد",
"بوتات",
"جوال",
"كيبورد",
"شاحن",
"العاب",
"برمجة",
"حروف",
"السلام عليكم",
"طاوله",
"برودكاست",
"تليفون",
"مليون",
"رجال",
"كيبل",
"ماوس",
"جهاز",
"كريديت",
"بطاقة",
"عضلات",
"مشاهير",
"سعادة",
"عجوز",
"لغة",
"يوسف",
"server",
"discord",
"pro",
"bot",
"empire",
"games",
"java",
"table",
"brodcast",
"music",
"money",
"bye",
"hi",
"pc",
"phone",
"musab",
"thth",
"fat",
"here",
"boy",
"man",
"omg",
"lama",
];
        var x2 = ['م ح م د',
        "م د ر س ة",
        "ب ي ت",
        "ا ل ل ه",
"ب ي ت م ق د س",
"م ه ن د س",
"ر ي ا ض ي ا ت",
"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
"ط م ا ط م",
"س ي ر ف ر",
"د س ك و ر د",
"خ ا ل د",
"ب و ت ا ت",
"ج و ا ل",
"ك ي ب و ر د",
"ش ا ح ن",
"ا ل ع ا ب",
"ب ر م ج ة",
"ح ر و ف",
"ا ل س ل ا م ع ل ي ك م",
"ط ا و ل ه",
"ب ر و د ك ا س ت",
"ت ل ي ف و ن",
"م ل ي و ن",
"ر ج ا ل",
"ك ي ب ل",
"م ا و س",
"ج ه ا ز",
"ك ر ي د ي ت",
"ب ط ا ق ة" , 
"ع ض ل ا ت",
"م ش ا ه ي ر",
"س ع ا د ة",
"ع ج و ز",
"ل غ ة",
"ي و س ف",
"s e r v e r",
"d i s c o r d",
"p r o",
"b o t",
"e m p i r e",
"g a m e s",
"j a v a",
"t a b l e",
"b r o d c a s t",
"m u s i c",
"m o n e y",
"b y e",
"h i",
"p c",
"p h o n e",
"m u s a b",
"t h t h",
"f a t",
"h e r e",
"b o y",
"m a n",
"o m g",
"l a m a",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  فكك
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
        })
        })
    }
})

//لعبة اسرع
client.on('message', message => {
    if(message.content.startsWith(prefix + 'اسرع') || message.content.startsWith(prefix + 'سرعة') || message.content.startsWith(prefix + 'سرعه')) {
        var x = ["خالد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"رياضيات",
"بسم الله الرحمن الرحيم",
"طماطم",
"سيرفر",
"دسكورد",
"محمد",
"عالم",
"جوال",
"كيبورد",
"شاحن",
"العاب",
"برمجة",
"حروف",
"كيمياء",
"عساكم من عوادة",
"احساس",
"فورت نايت",
"الله اكبر",
"مساعد",
"عظيم",
"برودكاست",
"شتقن",
"اميره",
"امير",
"ستريم",
"انستقرام",
"غيوم",
"سماء",
"بحر",
"hi",
"bye ",
"gg",
"power",
"kill",
"death",
"normal",
"fortnite",
"minecraft",
"hungry",
"eat",
"world",
"musab",
"yousef",
"line",
"games",
"goodbye",
"fire",
"wait",
"pleas",
"cry",
"call of duty",
"north",
"helper",
"great",
"brodcast",
"gun",
"king",
"youtube",
"pc",
"insagram",
"load",
"sky",
"see",
];
        var x2 = ['خالد',
        "مدرسة",
        "بيت ",
        "الله",
"بيت مقدس",
"مهندس",
"رياضيات",
"بسم الله الرحمن الرحيم",
"طماطم",
"سيرفر",
"دسكورد",
"محمد",
"عالم",
"جوال",
"كيبورد",
"شاحن",
"العاب",
"برمجة",
"حروف",
"كيمياء",
"عساكم من عوادة",
"احساس",
"فورت نايت",
"الله اكبر",
"مساعد",
"عظيم",
"برودكاست",
"شتقن",
"اميره",
"امير",
"ستريم",
"انستقرام",
"غيوم",
"سماء",
"بحر",
"hi",
"bye ",
"gg",
"power",
"kill",
"death",
"normal",
"fortnite",
"minecraft",
"hungry",
"eat",
"world",
"musab",
"yousef",
"line",
"games",
"goodbye",
"fire",
"wait",
"pleas",
"cry",
"call of duty",
"north",
"helper",
"great",
"brodcast",
"gun",
"king",
"youtube",
"pc",
"insagram",
"load",
"sky",
"see",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اسرع
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة الكلمة في وقت مناسب`);
        })
        })
    }
})


//-----------------------------------------------------//

//-----------------------------------------------------//





client.on('message', wolf => {
  if (wolf.content === prefix + "hefp") {////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("RED")////لون الامبد
.setDescription(`
- تعريف البوت 
1- بوت العاب ب أوامر مميزة
2- شغال 24 ساعة
3- مصنوع بواسطة <@616709497817268281>
            ・・・・・・・・・・・・・・・・・・
**〘<:tingames:761169952853458944> I  البرفكس الخاص بالبوت هو [-] 〙
〘<:tingames:761169952853458944> I الأوامر الخاصه بالبوت : 
            ・・・・・・・・・・・・・・・・・・
〘<:tingames:761169952853458944> ${prefix}كت , كت تويت , cut 〙
〘<:tingames:761169952853458944> ${prefix}حكم 〙
〘<:tingames:761169952853458944> ${prefix}جمع , اجمع 〙
〘<:tingames:761169952853458944> ${prefix}طرح , اطرح 〙
〘<:tingames:761169952853458944> ${prefix}ضرب 〙
〘<:tingames:761169952853458944> ${prefix}اسرع , سرعة 〙
〘<:tingames:761169952853458944> ${prefix}فكك , fkk 〙
〘<:tingames:761169952853458944> ${prefix}صراحة , sra7a 〙
〘<:tingames:761169952853458944> ${prefix}سؤال , اسئلة 〙
〘<:tingames:761169952853458944> ${prefix}عواصم 〙
〘<:tingames:761169952853458944> ${prefix}xo ====> xo لعبة 〙**`)////هنا الاوامر
.setFooter("**Made By Musab || Arab Empire**")
wolf.channel.send({embed:embed});
}
});




client.login("NzY3NTc1OTk3NDg2MzMzOTYz.X4z62g.dRYW4kVlP2kPY4LdKnkMpLF5U3c");