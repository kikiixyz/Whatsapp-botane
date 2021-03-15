const moment = require("moment-timezone")
const fs = require("fs")
const ffmpeg = require("fluent-ffmpeg")

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { exec } = require("child_process")
const { MessageType, Mimetype } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const yts = require("yt-search")
const ytdl = require("ytdl-core")
exports.run = async (bot, message, args, body, from) => {
   let yutup = await yts(body.slice(12);
        yutup =yutup.all;
        if(yutup.length < 1) return await bot.sendMessage(from, 'mohon maaf, audio' + message.body(11) + 'tidak ditemukan', text, {quoted: message});
        bot.sendMessage(from, 'Data ditemukan! tunggu sebentar, lagu sedang di unduh!', text, {quoted: message})

        let title = yutup[0].title.replace(' ', '+');
        let stream = ytdl(yutup[0].videoId, {
            quality: 'highestaudio',
        });
             ffmpeg(stream)
            .audioBitrate(320)
            .save('output.mp3')
            .on('end', async () => {
                bot.sendMessage(from, "Title: " + yutup[0].title + "\n*MENGUPLOAD KE WHATSAPP*", MessageType.text, {quoted: message})
                await bot.sendMessage(from, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
};

exports.help = {
    name: "playmusic",
    description: "Membuat hari hari anda jadi good",
    usage: "playmusic < query >",
    cooldown: 5,
};
