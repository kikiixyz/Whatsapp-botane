const moment = require("moment-timezone")
const fs = require("fs")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { exec } = require("child_process")
const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const yts = require("yts")
const ytdl = require("ytdl-core")
const ffmpeg = require("fluent-ffmpeg")
exports.run = async (bot, message, args, from) => {
   let yutup = await yts(message.body(11));
        yutup =yutup.all;
        if(yutu.length < 1) return await bot.sendMessage(from, 'mohon maaf, audio' + message.body(11) + 'tidak ditemukan', text, quoted: message});
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
