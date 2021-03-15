const moment = require("moment-timezone")
const fs = require("fs")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { exec } = require("child_process")
const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

exports.run = async (bot, message, args, body, from) => {
    const image = await bot.downloadAndSaveMediaMessage(message)
    exec('cwebp -q 50 ' + image + ' -o trash/' + time + '.webp', (error, stdout, stderr) => {
        let result = fs.readFileSync('trash/' + time + '.webp')
        bot.sendMessage(from, result, sticker, { quoted: message })
    })
};

exports.help = {
    name: "Sticker",
    description: "Make sticker whatsapp",
    usage: "sticker <tagimage>",
    cooldown: 5,
};
