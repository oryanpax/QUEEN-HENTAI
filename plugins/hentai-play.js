
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} SADIQ BOT`
  await m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Video Not Found, Try Another Title'
  let { title, thumbnail, timestamp, views, ago, url } = vid
  let wm = '*🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥*'

  let captvid = `╭────  🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 YT ─⬣
💝 Title: ${title}
💝 Duration: ${timestamp}
💝 Views: ${views}
💝 Upload: ${ago}
💝 Link: ${url}
╰────────⬣`
  conn.sendButton(m.chat, `╭──── 🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 YT ─⬣
💝 Title: ${title}
💝 Duration: ${timestamp}
💝 Views: ${views}
💝 Upload: ${ago}
💝 Link: ${url}
╰────────⬣`, author.trim(), await( await conn.getFile(thumbnail)).data, ['💝 VIDEO 💝', `${usedPrefix}ytmp4 ${url}`], false, { quoted: m, 'document': { 'url':'🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥' },
'mimetype': global.dpdf,
'fileName': `🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥 ℙ𝕃𝔸𝕐𝔼ℝ`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `Song Is Uploading by 🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥...`,
body: wm,
sourceUrl: '🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '💝 VIDEO 💝' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play|song)$/i

handler.exp = 0
handler.diamond = false

export default handler
