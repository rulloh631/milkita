var handler = async (m, { text, conn }) => {
	if (!text) throw 'Perihal Apah?'
	let url = text.replace(/\s+/g, '+')
	try {
		let response = await fetch(API('xzn','api/igdl', { url }, 'apikey'))
		let wtf = await response.json()
		for (let i = 0; i < wtf.media.length; i++ ) {
			let caption = i == 0 ? wtf.caption : ''
			let type = wtf.media[i].includes('.jpg') ? 'image' : 'video'
			await conn.sendMessage(m.chat, { [type]: { url: wtf.media[i] }, caption }, { quoted: m })
			await delay(1500)
		}
	} catch (e) {
		console.error(e)
		throw e.toString()
	}
}
handler.help = handler.command = ['igdl']
handler.tags = ['instagram']

module.exports = handler