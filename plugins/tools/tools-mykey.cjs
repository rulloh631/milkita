var handler = async (m, {
	text,
	conn
}) => {
	var v = (await axios.get(API('xzn', 'checkapikey', {}, 'apikey'))).data
	return v
}
handler.command = ['mykey'];
handler.owner = true;
module.exports = handler;