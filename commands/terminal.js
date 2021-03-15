const { evaluate } = require("mathjs");

const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const exec = require('child_process').exec;
const os = require("os");

exports.run = async (bot, message, args, body, from) => {
     var userhost = os.userInfo().username;
    exec(body.slice(10), async (err, stdout, stderr) => {
        if (err) {
            return await bot.sendMessage(from,'      *terminal*      \n' + userhost + ':~# ' + body.slice(10) + '\n' + err + '',MessageType.text, {quoted: message});
        }
        
        return await bot.sendMessage(from, '    *Terminal*     \n' + userhost + ':~# ' + body.slice(10) + '\n' + stdout + '',MessageType.text, {quoted: message});
      });
}
exports.help = {
    name: "terminal",
    description: "Terminal di whatsapp",
    usage: "terminal < git clone >",
    cooldown: 5,
};
