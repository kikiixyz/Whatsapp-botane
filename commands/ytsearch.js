const { evaluate } = require("mathjs");
const fs = require("fs-extra")
const yts = require("yt-search")
const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

exports.run = async (bot, message, args, body, from) => {
  const ms = body.slice(11)
	var irama = await yts(ms)
	var yutup = '';
        irama.all.map((video) => {
            yutup += '> ' + video.title + ' - ' + video.url + '\n\n'
        });
	await bot.sendMessage(from, yutup, MessageType.text, {quoted: message})}

exports.help = {
    name: "ytsearch",
    description: "yts",
    usage: "ytsearch < txt >",
    cooldown: 5,
};
