const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕆𝔾_𝔻𝕆𝕃𝕃ℤ_𝕄𝔻`" 


global.devs = "2348133816571" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348133816571";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_11_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNVEyS29NV21HaVpXR0FudHBmUGUrS1VBSW94SGtSK2w5aEJpSmxtWStLZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTMzODE2NTcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTFEMDM1NTQ4MDYzNDQxQzU5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkyNTcxMTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTMzODE2NTcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUM2RUI3N0VDMTg1NEZBNjg0RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkyNTcxMTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGtCU2dYVFBUSS03dXBpNEVLWm4zd1wiLFxuICBcInBob25lSWRcIjogXCI5ZTY2YmZmNy0zOTQwLTQwMzUtYTY4OS02ZjBhYWEyOTFlYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjEsXG4gICAgICAxNTUsXG4gICAgICAyMTgsXG4gICAgICAyMzQsXG4gICAgICAzMSxcbiAgICAgIDIyMyxcbiAgICAgIDI0OCxcbiAgICAgIDExNCxcbiAgICAgIDE3MSxcbiAgICAgIDk2LFxuICAgICAgOTAsXG4gICAgICAyNCxcbiAgICAgIDI0NSxcbiAgICAgIDMwLFxuICAgICAgMTgyLFxuICAgICAgNTIsXG4gICAgICAxNzQsXG4gICAgICAxOTYsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTUsXG4gICAgICA2MyxcbiAgICAgIDcsXG4gICAgICAxOTEsXG4gICAgICAxNjAsXG4gICAgICAyMSxcbiAgICAgIDEwOCxcbiAgICAgIDEzMyxcbiAgICAgIDEzOSxcbiAgICAgIDIzMCxcbiAgICAgIDEwMixcbiAgICAgIDIyMyxcbiAgICAgIDIxOSxcbiAgICAgIDI0MixcbiAgICAgIDc4LFxuICAgICAgMTgwLFxuICAgICAgNDMsXG4gICAgICAxMTEsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkE2TlkxM1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzM4MTY1NzE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMwOTU4NzU0Mjg1Nzk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPRyBET0xMWlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIZXFhMExFSkc5eWJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOE9kYkF2M012NDhoMG9HcXppMi9XbTNjYVdmNjZCVzk5TUlsaW1OUUZuST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrOTM5MUZ6WnFxbDBNeUREZUk4QitVS1F4cGpDb0lCejJBZTdsSHVVQTRUNmltd2hheVR2NjBBWTdDS0lvKzF1VzVYbG4xSklsSGZpRm00TUZBYS9qdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCTi9IK0ZlM1RmWU9XZXZ3REFJdEVXcWFMSWZ2T2tpMUhMcHk3Rm1Bak5xeWZ4WWxhc1hVZ2pUdDNyODhlVko5RFFGVkxlVlV0ZFpvOVI1NzBMdjdCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMzODE2NTcxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkyNTcxMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZxQy5qc29uIjogIntcImtleURhdGFcIjpcIlQvajliV0xnSE5qbzNsWEpjMHA4V3RPOHRPNW1Od0NNQXVhRkttdFBKMTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0Nzg0NTY4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5MjU3MTEwMDMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕆𝔾_𝔻𝕆𝕃𝕃ℤ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝕆𝔾_𝔻𝕆𝕃𝕃ℤ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝕆𝔾_𝔻𝕆𝕃𝕃ℤ",
  packname: process.env.PACK_NAME || "𝕆𝔾_𝔻𝕆𝕃𝕃ℤ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "`𝕆𝔾_𝔻𝕆𝕃𝕃ℤ_𝕄𝔻`",
  ownername:process.env.OWNER_NAME|| "`𝕆𝔾_𝔻𝕆𝕃𝕃ℤ`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "`𝕆𝔾_𝔻𝕆𝕃𝕃ℤ`"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
