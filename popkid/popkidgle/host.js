import os from 'os';
import process from 'process';
import config from '../../config.cjs';

const hostCommand = async (m, Matrix) => {
  const prefix = config.PREFIX || '.';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd !== 'host') return;

  try {
    const hostname = os.hostname();
    const platform = os.platform();
    const arch = os.arch();
    const release = os.release();
    const cpus = os.cpus();
    const cpuModel = cpus[0]?.model || 'Unknown CPU';
    const cpuCores = cpus.length;
    const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2);
    const nodeVersion = process.version;
    const uptimeSeconds = process.uptime();
    const uptime = `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor((uptimeSeconds % 3600) / 60)}m ${Math.floor(uptimeSeconds % 60)}s`;
    const now = new Date().toLocaleString();

    const messageText = `
🏷️ *Bot Deployment Info*

🌐 Hostname     : ${hostname}
🖥️ Platform      : ${platform} (${arch})
📦 OS Release   : ${release}
⚙️ CPU          : ${cpuModel} (${cpuCores} cores)
💾 Memory       : ${freeMem} GB free / ${totalMem} GB total
🔧 Node.js      : ${nodeVersion}
⏳ Uptime       : ${uptime}
🕒 Server Time  : ${now}

_Use this info to check your bot's deployment environment._
    `;

    await Matrix.sendMessage(m.from, {
      text: messageText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "Popkid-Xmd",
          newsletterJid: "120363290715861418@newsletter",
        },
        externalAdReply: {
          title: "Popkid-Xmd Bot",
          body: "Host Environment Details",
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceUrl: "https://github.com/popkid-xmd"
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Host command error:', error);
    await Matrix.sendMessage(m.from, {
      text: '❌ Failed to retrieve host info.',
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "Popkid-Xmd",
          newsletterJid: "120363290715861418@newsletter",
        }
      }
    }, { quoted: m });
  }
};

export default hostCommand;
