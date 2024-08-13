const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038336733";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFWcG9KaDFjdTNkc0s1NDRNS281Yzc3ZTI0UkVvdUlkNTZqdnRLbjBOQ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjIwUU1uN2NZUWJTR3FVWkRwcEtTLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQ5ZmVlZTUtZjUzMS00NmE0LWIyOTEtNzU0YzljODNjNDk0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDM4LFxuICAgICAgMTAzLFxuICAgICAgMTc2LFxuICAgICAgMTM2LFxuICAgICAgMTc5LFxuICAgICAgMTc4LFxuICAgICAgMTAzLFxuICAgICAgMTUyLFxuICAgICAgMTk3LFxuICAgICAgNDEsXG4gICAgICAyMDEsXG4gICAgICA0OSxcbiAgICAgIDksXG4gICAgICAxOTYsXG4gICAgICAxNTEsXG4gICAgICAyNixcbiAgICAgIDgyLFxuICAgICAgMjksXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMjE0LFxuICAgICAgMTg0LFxuICAgICAgNTIsXG4gICAgICAyNixcbiAgICAgIDEyNixcbiAgICAgIDI4LFxuICAgICAgMjEwLFxuICAgICAgMjE0LFxuICAgICAgMTQ4LFxuICAgICAgMTU2LFxuICAgICAgMTAyLFxuICAgICAgMjE0LFxuICAgICAgMTk0LFxuICAgICAgMTI2LFxuICAgICAgMTM4LFxuICAgICAgMCxcbiAgICAgIDkxLFxuICAgICAgNjgsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlJGUUFEVzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzgzMzY3MzM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0NjM3NjQ1NDU5NDkwOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uTHdvTUZFUG4wN0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUkRTTGpGc1NGTnRFVm9OWTlXdHVrMHBRT3Z6TVM2ejNOTEhSeE14Y2FWbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxV1NLUnpSQTlGc21jdU1BRitaRTdjY0FUeXhnMHord0RRK2hMVzZzRTgvK2I4b1lxMy9XTzU4SXQveldJOFFlTDF3c2I3ZmZrRFlja1RKNnNSRitBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBaWg2ZE51a1FsTFFIaW5mZHdRbjlTcjlhZ0tMVWNCbyt5OE1iVTh5cjVNS1ZXaU5TOTl2aGV5VW5UU1hib0Q3TXdOQXFzSGthbFlJTjI5SGJJcHFCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM4MzM2NzMzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNTQ2MjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2JRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHYlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJheDNlcmVFZmZyWHhaMGY4bDZjMSt1WTNITkhBdWxzWWsyM0FlK2hoSzl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDk1NTk3NTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔻𝔸ℝ𝕋𝕆ℕ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
