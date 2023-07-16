var handler = async (m, {
	conn
}) => {
	try {
		var uploadFile = require('../../lib/uploadFile.cjs');
		var q = m.quoted ? m.quoted : m,
			mime = (q.msg || q).mimetype || ''
		if (/image/g.test(mime)) {
			var img = await uploadFile(await q.download())
			var bf = (await axios.get(API('xzn', 'api/toanime', {
				url: img
			}, 'apikey'), {
				responseType: 'arraybuffer'
			})).data
			await conn.sendMessage(m.chat, {
				image: bf,
				caption: '_iyh_'
			}, {
				quoted: m
			})
		} else throw `Send/reply an image`
	} catch (e) {
		m.reply(e.toString())
	}
};
handler.help = handler.command = ['toanime'];
handler.tags = ['weebs'];
module.exports = handler;