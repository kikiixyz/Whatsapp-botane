const { MessageType, Mimetype} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const axios = require("axios")
const fs = require("fs")
const ffmpeg = require("fluent-ffmpeg")
const istimer = (ts) => require('moment-timezone').duration(moment() - moment(ts * 1000)).asSeconds()
const deepai = require('deepai');
deepai.setApiKey('4ec4c7f4-63cd-457f-b244-7e12bba7ebde');
exports.run = async (bot, message, args, body, from) => {
    try {
		const medianye = await JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        console.log(medianye)
		const mediaData = await bot.downloadAndSaveMediaMessage(medianye)
		 bot.sendMessage(from, 'permintaan anda sedang di proses om', text, {quoted: message})
		 ffmpeg(mediaData)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

           });

           var respoimage = `${resp.output_url}`
          const response = await axios({
          method: "get",
          url: respoimage,
          responseType: 'arraybuffer'
        })
                await bot.sendMessage(from, response.data, image, {mimetype: Mimetype.jpg, caption: 'nih om'})

            });
		} catch(err) {
			await bot.sendMessage(from, 'Error!', text, {quoted: message})
		}
		}
exports.help = {
    name: "toonify",
    description: "MEMBUAT WAJAH ANDA JADI ANEH",
    usage: "toonify",
    cooldown: 5
};

exports.help = {
    name: "toonify",
    description: "MEMBUAT WAJAH ANDA JADI ANEH",
    usage: "toonify",
    cooldown: 5
};
