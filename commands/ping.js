const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const istimer = (ts) => require('moment-timezone').duration(moment() - moment(ts * 1000)).asSeconds()

exports.run = async (bot, message, args, body, from) => {
    bot.sendMessage(from, "🏓 PONG! • speed: ${istimer(message.messageTimestamp)}ms", text, { quoted: message });
};

exports.help = {
    name: "Ping",
    description: "PING PONG",
    usage: "ping",
    cooldown: 5
};
