const axios = require('axios');
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "shibe",
    category: "animals",
    description: "Gởi ảnh/video về shiba",
    run: async (client, message, args) => {
        try {
            await axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true').then(response => {
                const embed = new MessageEmbed()
                    .setTitle('Sh <3')
                    .setURL(response.data)
                    .setImage(response.data)
                message.channel.send(embed)
            })
        }
        catch(e){
            console.log(e);
            return message.channel.send('Bot lỗi, vui lòng thử lại sau!');
        }
    }
}
