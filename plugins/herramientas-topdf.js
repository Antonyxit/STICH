import uploadImage from '../lib/uploadImage.js';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.herramientas_topdf

const handler = async (m, {conn, text, usedPrefix, command, isOwner}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw tradutor.texto1;
  const img = await q.download?.();
  const url = await uploadImage(img);
  const docname = text ? text : m.pushName || 'documento';
  conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`, docname + '.pdf', '', m, false, {asDocument: true});
};
handler.command = /^topdf$/i;
export default handler;
