import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['919506756846', '𝐌𝐢𝐬𝐚 𝐀𝐦𝐚𝐧𝐞 🔥', true], 
  [''] 
] //Number of owners

global.mods = ['919506756846','919506756846'] 
global.prems = ['919506756846', '912269719357', '912269719357']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '🔥 𝘽𝘼𝙆𝘾𝙃𝙊𝘿 𝘽𝙊𝙏 🔥'
global.premium = 'true'
global.packname = '𝐌𝐢𝐬𝐚 𝐀𝐦𝐚𝐧𝐞 𝘽𝙊𝙏 🤖' 
global.author = ' ' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/imsad1q' 
global.dygp = 'https://chat.whatsapp.com/GNVDNrfbJy64ZlgI9swuh7'
global.fgsc = 'https://github.com/UL7R0N' 
global.fgyt = 'https://chat.whatsapp.com/GNVDNrfbJy64ZlgI9swuh7'
global.fgpyp = 'https://chat.whatsapp.com/GNVDNrfbJy64ZlgI9swuh7'
global.fglog = 'https://photos.app.goo.gl/ubu7QBryPm7DPqXA9' 


global.wait = '𝙈𝘼𝘿𝙀 𝙒𝙄𝙏𝙃 💗,  𝙐𝙎𝙀 𝙒𝙄𝙏𝙃 💖 ~ 𝙎𝘼𝘿𝙄𝙓                                              * _SENDING... PLEASE WAIT_*'
global.rwait = '⚡'
global.dmoji = '🤣'
global.done = '💗'
global.error = '👎' 
global.xmoji = '🤖 ' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
