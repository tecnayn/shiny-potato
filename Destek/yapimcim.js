const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
  .setTitle("Tec Economy | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\`tec#1000\`**

**Botun Sahibi** | **<@949011585836408874>**


`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
