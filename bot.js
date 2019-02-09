const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`i think i will fuck your family to the tree of bitchs هجولة يا ابن الحلال انا بدعس على مين طيب يا ورع؟`);
}, 30)
})

client.login(process.env.BOT_TOKEN);