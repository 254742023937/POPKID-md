import dotenv from 'dotenv';
dotenv.config();
import { makeWASocket, fetchLatestBaileysVersion, DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './popkid/popkidd/popkiddd.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import 'node-cache';
import path from 'path';
import chalk from 'chalk';
import 'axios';
import config from './config.cjs';
import autoreact from './lib/autoreact.cjs';
import { fileURLToPath } from 'url';
import { File } from 'megajs';

const { emojis, doReact } = autoreact;
const app = express();
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({
  timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sessionDir = path.join(__dirname, "session");
const credsPath = path.join(sessionDir, "creds.json");

if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir, { recursive: true });
}

async function downloadSessionData() {
  console.log("Debugging SESSION_ID:", config.SESSION_ID);
  if (!config.SESSION_ID) {
    console.error("❌ Please add your session to SESSION_ID env !!");
    return false;
  }
  const sessionData = config.SESSION_ID.split("POPKID;;;")[1];
  if (!sessionData || !sessionData.includes('#')) {
    console.error("❌ Invalid SESSION_ID format! It must contain both file ID and decryption key.");
    return false;
  }
  const [fileId, fileKey] = sessionData.split('#');
  try {
    console.log("🔄 Downloading Session...");
    const megaFile = File.fromURL(`https://mega.nz/file/${fileId}#${fileKey}`);
    const downloaded = await new Promise((res, rej) => {
      megaFile.download((err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
    await fs.promises.writeFile(credsPath, downloaded);
    console.log("🔒 Session Successfully Loaded !!");
    return true;
  } catch (err) {
    console.error("❌ Failed to download session data:", err);
    return false;
  }
}

async function start() {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(`🤖 POPKID-GLE using WA v${version.join('.')} | Latest: ${isLatest}`);

    const sock = makeWASocket({
      version,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: useQR,
      browser: ['POPKID-GLE', 'Safari', '3.3'],
      auth: state,
      getMessage: async key => {
        if (store) {
          const msg = await store.loadMessage(key.remoteJid, key.id);
          return msg?.message;
        }
        return { conversation: 'popkid-gle whatsapp user bot' };
      }
    });

    sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
      if (connection === "close") {
        if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
          start();
        }
      } else if (connection === "open") {
        if (initialConnection) {
          console.log(chalk.green("✅ POPKID-GLE is now online!"));

          try {
            await sock.groupAcceptInvite("FHDEPkBBf281sUcdj17eU9");
            console.log(chalk.green("✅ Successfully joined group."));
          } catch (err) {
            console.error(chalk.red("❌ Failed to join group: " + err.message));
          }

          const welcomeImg = { url: 'https://files.catbox.moe/alnj32.jpg' };
          sock.newsletterFollow("120363420342566562@newsletter");
          sock.newsletterFollow("120363420342566562@newsletter");
          await sock.sendMessage(sock.user.id, {
            image: welcomeImg,
            caption: `
╔═════════════════
║ *✅POPKID CONNECTED*
╠═════════════════
║ *⚡DEV POPKID GLE*
╚═════════════════
║ *⌛NUM DEV :+254111385747*
╚═════════════════`,
            contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363420342566562@newsletter",
                newsletterName: "POPKID-GLE",
                serverMessageId: -1
              },
              externalAdReply: {
                title: "POPKID-GLE",
                body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ popkid-gle",
                thumbnailUrl: "https://files.catbox.moe/alnj32.jpg",
                sourceUrl: "https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l",
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          });

          initialConnection = false;
        } else {
          console.log(chalk.blue("♻️ Connection reestablished after restart."));
        }
      }
    });

    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("messages.upsert", m => Handler(m, sock, logger));
    sock.ev.on("call", c => Callupdate(c, sock));
    sock.ev.on("group-participants.update", g => GroupUpdate(sock, g));

    if (config.MODE === 'public') {
      sock.public = true;
    } else if (config.MODE === 'private') {
      sock.public = false;
    }

    sock.ev.on("messages.upsert", async m => {
      try {
        const msg = m.messages[0];
        if (!msg.key.fromMe && config.AUTO_REACT && msg.message) {
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          await doReact(emoji, msg, sock);
        }
      } catch (e) {
        console.error("Auto react error:", e);
      }
    });

  } catch (e) {
    console.error("Critical Error:", e);
    process.exit(1);
  }
}

async function init() {
  if (fs.existsSync(credsPath)) {
    console.log("🔒 Session file found, proceeding without QR.");
    await start();
  } else {
    const downloaded = await downloadSessionData();
    if (downloaded) {
      console.log("✅ Session downloaded, starting bot.");
      await start();
    } else {
      console.log("❌ No session found or invalid, printing QR.");
      useQR = true;
      await start();
    }
  }
}
init();

app.use(express.static(path.join(__dirname, "mydata")));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "mydata", "index.html"));
});
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
