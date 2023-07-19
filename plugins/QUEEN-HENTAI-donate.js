
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
🔥 *DONATE* 🔥
If you get more info of 🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 Please Contact 919506756846 💰`

conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
