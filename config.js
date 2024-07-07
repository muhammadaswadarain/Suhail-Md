const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923419159670" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_26_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjMxNW5rb1hRMEFWWVBYaWptM0xTK2tUaGZIajljdUhVYmFKcWo5TzFndjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE5MTU5NjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRkJDOUM5N0Y3NTE3MjdEQTY5NkQyNjAxNkExNkY5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNDQzOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTkxNTk2NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFBQjQxMzAxMURCQzNCRjE2QkE2Mjk5MEVDQzBERjA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0NDM5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKNExCWUtncVRHS2lCdDZfRUM0OEhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5ZmZmNzA1LTcxMzItNGZmMy1iZDBiLTFjYTI4MWU2OTgyNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAyNDksXG4gICAgICAxMjAsXG4gICAgICAyMTMsXG4gICAgICAyNDUsXG4gICAgICAyMDYsXG4gICAgICAyMjUsXG4gICAgICA1OCxcbiAgICAgIDIwLFxuICAgICAgMTgxLFxuICAgICAgMjE3LFxuICAgICAgNDgsXG4gICAgICA2MCxcbiAgICAgIDI0LFxuICAgICAgNTYsXG4gICAgICA1MyxcbiAgICAgIDIyMCxcbiAgICAgIDI0MCxcbiAgICAgIDQxLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDI1NCxcbiAgICAgIDE4NSxcbiAgICAgIDg0LFxuICAgICAgMjIyLFxuICAgICAgMjA4LFxuICAgICAgNDIsXG4gICAgICAyMyxcbiAgICAgIDEzNCxcbiAgICAgIDExNyxcbiAgICAgIDE2MixcbiAgICAgIDIxLFxuICAgICAgMjUxLFxuICAgICAgMTMxLFxuICAgICAgMTcyLFxuICAgICAgMTI1LFxuICAgICAgMTM4LFxuICAgICAgMTIsXG4gICAgICA3NCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJYVFQzVlcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTkxNTk2NzA6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNjUwNTg1NzY3OTM4OjM3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKVsOKBkMyk4pWv8J2RtPCdkbzwnZGv8J2RqPCdkbTwnZG08J2RqPCdkasg8J2RqPCdkbrwnZG+8J2RqPCdkavilbDigZDMpOKVr1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0phem9zRUdFTUsrcWJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibXhVeUx6T2lhY1lhNE1EaHNVSTNhNUQ5R3hZZTNxODNZalZuaG9Hd2pTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKTUFMMUwvVjd5bXlEUjIvL2E5WWZ5d0x2a0szaGJVdXpmY1g0c3ZFaHZzdHVsL2o4NTVrdGpqQnc2S0lSU1dPcllkSG5ESEtJbGkzRjhiZm1Jd1dEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRYUtncWkycFJrNTJBMHZaWUVEYTFiczJySXgrMXpHSEVFb09oOENJVGx0aXRFQ0NJWEp4UnEyTE1YbUwyTWRucU0zQmdqRGMrd1NaY0dBSG1UdmhBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTkxNTk2NzA6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQ0Mzg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjJlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCMmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwNTIzT2dQZTQvdEFIV2J6YldMQVdnL1JzTEVBVGpqZGptbmR4by9zdjVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDc0OTEyMjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDMxNTI0NTcxN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
  botname : process.env.BOT_NAME  || "M ASWAD",
  ownername:process.env.OWNER_NAME|| "M ASWAD" process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "ccwy0xuzzf2sncovh4igwi0cnhjttwhu2yhnnq4xwa56hjcnnavr3jrbyei06683",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
