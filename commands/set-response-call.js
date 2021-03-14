const { evaluate } = require("mathjs");

const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

exports.run = async (bot, message, args, from) => {
  
            call.splice(1)
            fs.writeFileSync('./call.json', JSON.stringify(call))
        const obj = {
        txt: message.body.slice(9)
               }
          call.push(obj)
}

exports.help = {
    name: "setcall",
    description: "ubah respon call",
    usage: "setcall < txt >",
    cooldown: 5,
};
