//(function(_0x1b52a6,_0x16df3f){const _0x3cbaa8=_0x4e11,_0xbe8ace=_0x1b52a6();while(!![]){try{const _0x780522=-parseInt(_0x3cbaa8(0xad))/0x1*(parseInt(_0x3cbaa8(0x99))/0x2)+parseInt(_0x3cbaa8(0x89))/0x3*(-parseInt(_0x3cbaa8(0xa7))/0x4)+-parseInt(_0x3cbaa8(0x8e))/0x5+-parseInt(_0x3cbaa8(0xac))/0x6+-parseInt(_0x3cbaa8(0x87))/0x7*(parseInt(_0x3cbaa8(0x8d))/0x8)+-parseInt(_0x3cbaa8(0xa0))/0x9+parseInt(_0x3cbaa8(0x90))/0xa;if(_0x780522===_0x16df3f)break;else _0xbe8ace['push'](_0xbe8ace['shift']());}catch(_0x415a15){_0xbe8ace['push'](_0xbe8ace['shift']());}}}(_0x1bed,0x786a6));import _0x15773e from'axios';import _0x21791c from'../../config.cjs';const chatbotcommand=async(_0x5e7e63,_0x87e920)=>{const _0x4ea881=_0x4e11,_0xa59048=await _0x87e920[_0x4ea881(0x88)](_0x87e920['user']['id']),_0x527b4c=[_0xa59048,_0x21791c['OWNER_NUMBER']+_0x4ea881(0x98)][_0x4ea881(0x9d)](_0x5e7e63[_0x4ea881(0xa6)]),_0x2284aa=_0x21791c[_0x4ea881(0xb3)],_0x402f69=_0x5e7e63[_0x4ea881(0xa2)][_0x4ea881(0x9c)](_0x2284aa)?_0x5e7e63[_0x4ea881(0xa2)][_0x4ea881(0xb5)](_0x2284aa[_0x4ea881(0x91)])['split']('\x20')[0x0][_0x4ea881(0x95)]():'',_0x4ba450=_0x5e7e63[_0x4ea881(0xa2)][_0x4ea881(0xb5)](_0x2284aa[_0x4ea881(0x91)]+_0x402f69[_0x4ea881(0x91)])[_0x4ea881(0x9b)]();if(_0x402f69===_0x4ea881(0x96)){if(!_0x527b4c)return _0x5e7e63['reply']('❌\x20*Access\x20Denied*\x0a_Only\x20bot\x20owner\x20can\x20toggle\x20this\x20feature._');let _0x178c3d;if(_0x4ba450==='on')_0x21791c[_0x4ea881(0xb4)]=!![],_0x178c3d=_0x4ea881(0x8a);else _0x4ba450===_0x4ea881(0xa9)?(_0x21791c[_0x4ea881(0xb4)]=![],_0x178c3d=_0x4ea881(0xb2)):_0x178c3d=_0x4ea881(0x94)+_0x2284aa+'chatbot\x20on\x0a•\x20'+_0x2284aa+_0x4ea881(0x8c);return await _0x87e920['sendMessage'](_0x5e7e63['from'],{'text':_0x178c3d,'contextInfo':{'forwardingScore':0xa,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4ea881(0x86),'newsletterName':'Popkid-Xmd'}}},{'quoted':_0x5e7e63});}if(_0x21791c['CHATBOT']){const _0x4feda7=_0x5e7e63;if(!_0x4feda7['message']||_0x4feda7['key'][_0x4ea881(0x9e)])return;const _0x3b9d45=_0x4feda7[_0x4ea881(0x9f)]['remoteJid'],_0x11ecf7=_0x4feda7[_0x4ea881(0x9f)][_0x4ea881(0xab)]||_0x3b9d45,_0x1bcf70=_0x3b9d45['endsWith']('@g.us'),_0x324630=_0x4feda7[_0x4ea881(0xa2)]||'';if(_0x1bcf70){const _0x248db6=_0x4feda7[_0x4ea881(0xa4)]?.[_0x4ea881(0x85)]?.[_0x4ea881(0x8b)]?.[_0x4ea881(0x92)]?.['includes'](_0x87e920[_0x4ea881(0xa8)]['id']),_0x181672=_0x4feda7[_0x4ea881(0xa4)]?.[_0x4ea881(0x85)]?.[_0x4ea881(0x8b)]?.['participant']===_0x87e920[_0x4ea881(0xa8)]['id'],_0x30b6f7=_0x4feda7[_0x4ea881(0xa4)]?.[_0x4ea881(0x85)]?.[_0x4ea881(0x8b)]?.['stanzaId']&&_0x181672;if(!_0x248db6&&!_0x181672&&!_0x30b6f7)return;}global[_0x4ea881(0xaf)]=global['userChats']||{},global[_0x4ea881(0xaf)][_0x11ecf7]=global['userChats'][_0x11ecf7]||[],global[_0x4ea881(0xaf)][_0x11ecf7][_0x4ea881(0xa1)](_0x4ea881(0xa3)+_0x324630);if(global['userChats'][_0x11ecf7][_0x4ea881(0x91)]>0xf)global['userChats'][_0x11ecf7]['shift']();const _0x4bddb8=global['userChats'][_0x11ecf7][_0x4ea881(0xb0)]('\x0a'),_0x335719='\x0aYou\x20are\x20*Popkid-Gle*,\x20a\x20smart\x20and\x20helpful\x20AI\x20WhatsApp\x20bot\x20created\x20by\x20Popkid-Xmd.\x20Your\x20job\x20is\x20to\x20provide\x20accurate,\x20conversational,\x20and\x20friendly\x20responses.\x0a\x0a🧠\x20*Chat\x20History:*\x0a'+_0x4bddb8+_0x4ea881(0xaa);try{const {data:_0x77942}=await _0x15773e['get'](_0x4ea881(0x8f),{'params':{'q':_0x324630,'logic':_0x335719}}),_0x3c7095=_0x77942['result']||'🤖\x20Sorry,\x20I\x20didn’t\x20get\x20that.';global['userChats'][_0x11ecf7][_0x4ea881(0xa1)](_0x4ea881(0x93)+_0x3c7095),await _0x87e920[_0x4ea881(0x97)](_0x3b9d45,{'text':_0x3c7095,'contextInfo':{'forwardingScore':0x5,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4ea881(0x86),'newsletterName':_0x4ea881(0xae)}}},{'quoted':_0x4feda7});}catch(_0x383e46){console[_0x4ea881(0xb1)](_0x4ea881(0x9a),_0x383e46),await _0x87e920['sendMessage'](_0x5e7e63['from'],{'text':_0x4ea881(0xa5),'contextInfo':{'isForwarded':!![],'forwardingScore':0x1,'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4ea881(0x86),'newsletterName':_0x4ea881(0xae)}}},{'quoted':_0x5e7e63});}}};export default chatbotcommand;function _0x4e11(_0x2239bd,_0x17ed81){const _0x1bed9a=_0x1bed();return _0x4e11=function(_0x4e11c5,_0x5a675d){_0x4e11c5=_0x4e11c5-0x85;let _0x534825=_0x1bed9a[_0x4e11c5];return _0x534825;},_0x4e11(_0x2239bd,_0x17ed81);}function _0x1bed(){const _0x5ccfd9=['slice','extendedTextMessage','120363420342566562@newsletter','7BRvBYP','decodeJid','619926WfGvIi','🤖\x20Chatbot\x20has\x20been\x20*enabled*.\x20I\x27m\x20now\x20live!','contextInfo','chatbot\x20off','5295512sSpemx','3417615IujHFs','https://mannoffc-x.hf.space/ai/logic','43515130UortLj','length','mentionedJid','🤖\x20Bot:\x20','💡\x20*Chatbot\x20Usage:*\x0a\x0a•\x20','toLowerCase','chatbot','sendMessage','@s.whatsapp.net','3420yOZMcQ','AI\x20Response\x20Error:','trim','startsWith','includes','fromMe','key','8064387vHXmlo','push','body','👤\x20User:\x20','message','⚠️\x20Error\x20getting\x20response\x20from\x20chatbot.','sender','16mVTTex','user','off','\x0a\x20\x20\x20\x20','participant','4659228IKOSPi','8LRPmcY','Popkid-Xmd','userChats','join','error','🔕\x20Chatbot\x20has\x20been\x20*disabled*.\x20I\x27ll\x20stay\x20silent.','PREFIX','CHATBOT'];_0x1bed=function(){return _0x5ccfd9;};return _0x1bed();}

import axios from 'axios';
import config from '../../config.cjs';

const chatbotcommand = async (m, Matrix) => {
  const botNumber = await Matrix.decodeJid(Matrix.user.id);
  const isCreator = [botNumber, `${config.OWNER_NUMBER}@s.whatsapp.net`].includes(m.sender);
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  //popkid
  if (cmd === 'chatbot') {
    if (!isCreator) return m.reply('❌ *Access Denied*\n_Only bot owner can toggle this feature._');

    let resMsg;
    if (text === 'on') {
      config.CHATBOT = true;
      resMsg = '🤖 Chatbot has been *enabled*. I\'m now live!';
    } else if (text === 'off') {
      config.CHATBOT = false;
      resMsg = '🔕 Chatbot has been *disabled*. I\'ll stay silent.';
    } else {
      resMsg = `💡 *Chatbot Usage:*\n\n• ${prefix}chatbot on\n• ${prefix}chatbot off`;
    }

    return await Matrix.sendMessage(m.from, {
      text: resMsg,
      contextInfo: {
        forwardingScore: 10,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363420342566562@newsletter',
          newsletterName: 'Popkid-Xmd'
        }
      }
    }, { quoted: m });
  }

  // ─── Chatbot Logic ───────────────────────────────
  if (config.CHATBOT) {
    const mek = m;
    if (!mek.message || mek.key.fromMe) return;

    const from = mek.key.remoteJid;
    const sender = mek.key.participant || from;
    const isGroup = from.endsWith('@g.us');
    const msgText = mek.body || '';

    if (isGroup) {
      const mentioned = mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(Matrix.user.id);
      const quotedYou = mek.message?.extendedTextMessage?.contextInfo?.participant === Matrix.user.id;
      const repliedToYou = mek.message?.extendedTextMessage?.contextInfo?.stanzaId && quotedYou;
      if (!mentioned && !quotedYou && !repliedToYou) return;
    }

    global.userChats = global.userChats || {};
    global.userChats[sender] = global.userChats[sender] || [];

    global.userChats[sender].push(`👤 User: ${msgText}`);
    if (global.userChats[sender].length > 15) global.userChats[sender].shift();

    const chatHistory = global.userChats[sender].join('\n');
    const prompt = `
You are *Popkid-Gle*, a smart and helpful AI WhatsApp bot created by Popkid-Xmd. Your job is to provide accurate, conversational, and friendly responses.

🧠 *Chat History:*
${chatHistory}
    `;

    try {
      const { data } = await axios.get("https://mannoffc-x.hf.space/ai/logic", {
        params: { q: msgText, logic: prompt }
      });

      const botReply = data.result || '🤖 Sorry, I didn’t get that.';
      global.userChats[sender].push(`🤖 Bot: ${botReply}`);

      await Matrix.sendMessage(from, {
        text: botReply,
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363420342566562@newsletter',
            newsletterName: 'Popkid-Xmd'
          }
        }
      }, { quoted: mek });

    } catch (err) {
      console.error('AI Response Error:', err);
      await Matrix.sendMessage(m.from, {
        text: '⚠️ Error getting response from chatbot.',
        contextInfo: {
          isForwarded: true,
          forwardingScore: 1,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363420342566562@newsletter',
            newsletterName: 'Popkid-Xmd'
          }
        }
      }, { quoted: m });
    }
  }
};

export default chatbotcommand;
