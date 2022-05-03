const Discord = require('discord.js')
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle(" Ekonomi | Komut Listesi")
.setColor("RANDOM")
.addField(":pcoin:  Ekonomi",`
**\`,yardım ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`
`)
.addField("🎲  Oyunlar",`
**\`,yardım oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slot-machine\`
`)
.addField("💼  Destek",`
**\`,yardım destek\`** - *Bize destek olabiliceğiniz komutlar!*

\`davet\`, \`yapımcım\`, \`destek\`,\`yardım\`

Ücretsiz Coinler Sunduğumuz [__Discord Sunucumuza__](https://discord.gg/RmpVJvaRtM) katılmayı unutmayın!
`)

let ekonomi = new Discord.MessageEmbed()
.setTitle(":pcoin:  Ekonomi Komutları")
.setColor("RANDOM")
.setDescription(`
**\`,günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`,para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`,gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`,soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`,çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`,yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`,çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`,çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
[Destek Sunucumuza](https://discord.gg/RmpVJvaRtM) katılmayı unutmayın
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("🎲  Oyun Komutları")
.setColor("RANDOM")
.setDescription(`
**\`,bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`,slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`,balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)
let destek = new Discord.MessageEmbed()
.setTitle("💼  Destek Komutları")
.setColor("RANDOM")
.setDescription(`
**\`,davet\` - __Botu kendi sunucunuza eklersiniz.__**
**\`,destek\` - __Botun destek sunucusunun linkini atar.__**
**\`,yapımcım\` - __Botun yapımcısını/geliştiricisini atar.__**
**\`,oy-ver\` - __Botun oy verme linkini atar.__**
[Destek Sunucumuza](https://discord.gg/RmpVJvaRtM) katılmayı unutmayın
`)
  if(!args[0]) return message.channel.send(yardim)
  

  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  if(args[0] === 'destek' || args[0] === 'support') return message.channel.send(destek)
  
  
};


exports.conf = {
    enabled: true, 
    aliases: ["yardim","help",'komutlar','commands'],
  };
  
  exports.help = {
    name: 'yardım'
  };
