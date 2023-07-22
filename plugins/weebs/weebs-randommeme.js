var handler = async (m, {
	text,
	conn
}) => {
	try {
		var response = await fetch(API('xzn', 'api/randommeme', {}, 'apikey'))
		var wtf = await response.json()
		if (!wtf.media) return wtf
		return await conn.sendFile(m.chat, wtf.media, '', wtf.caption, m)
	} catch (e) {
		m.reply("emror")
	};
};
handler.help = handler.command = ['meme'];
handler.tags = ['weebs'];

export default handler;