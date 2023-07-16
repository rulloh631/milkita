var handler = async (m, {
	conn
}) => {
	try {
		var uploadFile = require('../../lib/uploadFile.cjs');
		var q = m.quoted ? m.quoted : m,
			mime = (q.msg || q).mimetype || ''
		if (/image/g.test(mime)) {
			var img = await uploadFile(await q.download())
			conn.sendFile(m.chat, API('xzn', 'api/aiscene', {
				url: img
			}, 'apikey'), '', '_iyh_', m)
		} else throw `Send/reply an image`
	} catch (e) {
		m.reply("emror sir")
		await delay(1000)
		conn.reply(nomorown + "@s.whatsapp.net", e.toString(), m)
	}
};
handler.help = handler.command = ['aiscene'];
handler.tags = ['weebs'];
handler.premium = true
module.exports = handler;