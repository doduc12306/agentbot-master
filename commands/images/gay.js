const Canvacord = require('canvacord');
const canva = new Canvacord.Canvas();
const {MessageAttachment} = require('discord.js')
module.exports = {
    name: "gay",
    category: "images",
    description: "Cho 7 màu vào avt =))",
    usage: "gay [@tag]",
    VD: "gay @phamleduy04",
    run: async (client, message, args) => {
        let nguoitag = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let avaurl = nguoitag.user.avatarURL({format: 'png', dynamic: false})
        let image = await canva.gay(avaurl)
        let attach = new MessageAttachment(image, 'gay.png')
        return message.channel.send(attach)
    }
}