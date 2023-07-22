async function handler(m) {
	if (!m.quoted) throw 'reply pesan!'
	var q = this.serializeM(await m.getQuotedObj())
	if (!q) throw 'pesan yang anda reply tidak mengandung reply!'
	await q.copyNForward(m.sender, true)
}
handler.command = /^q$/i
module.exports = handler