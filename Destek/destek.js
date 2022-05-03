const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Destek")
.setDescription(`
**Sunucumuza Kayıl ve Muhabbet ET!**

[≫ Sunucumuza Katılmak için Buraya Tıkla ≪](Sunucu Daveti)
`)

return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["support"],
  };
  
  exports.help = {
    name: 'destek'
  };
