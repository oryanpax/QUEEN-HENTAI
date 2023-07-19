import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 img downloader\n\n Ex: *${usedPrefix + command}* 🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

 Results : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(img|image|gimage|imagen)$/i

handler.diamond = false

export default handler



