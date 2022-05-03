const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Destek | Oyver")
.setDescription(`
**Bota OY VER ve bizi öne çıkart!**
*Yakında*

[≫ Oy Vermek İçin Tıkla ≪](SUNUCU DAVETİ)
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

