const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]"
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code,
        aliases: command.aliases
    })
}

////////// STATUS \\\\\\\\\\
bot.status({
text:"ParzivaL Abone Botu",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
prefix:".",
log:"",
kanal:"",
abone:"",
yetkili:"",
sayı:""
})
