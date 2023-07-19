
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `*🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏  MUSIC 🔥* \n\nEnter A Song \n\n*💝 Ex;*\n*${usedPrefix + command}* Chalakata hamaro jawaniya`
    m.react('🥵')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['💝 MP3', `${usedPrefix}fgmp3 ${v.url}`, `💝   *Duration:* ${v.timestamp}\n💝   *Views:* ${v.views}\n💝   *Títle* : ${v.title}\n💝   *Publised:* ${v.ago}\n`],
          ['💝 MP4', `${usedPrefix}fgmp4 ${v.url}`, `💝   *Duratión:* ${v.timestamp}\n💝   *Views:* ${v.views}\n💝   *Títle* : ${v.title}\n💝   *Publised:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, ' *🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 MUSIC*🔎', `\n 🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 of results :\n *${text}*`, igfg, `💝Click💝 `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'song'] 

export default handler
