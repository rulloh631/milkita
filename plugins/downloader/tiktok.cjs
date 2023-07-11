var handler = async (m, { text, conn, command }) => {
  if (!text) throw 'Perihal Apah';
  let body = text.replace(/\s+/g, '+')
  try {
    let xzn
    switch(command){
    case 'tttren': 
      xzn = await fetch(API('xzn','api/tttrending', {region: body }, 'apikey'))
    break;
    case 'asupantt': 
      xzn = await fetch(API('xzn','api/ttsearch', {search: body}, 'apikey'))
    break;
    }
    let wtf = await xzn.json()
      conn.sendFile(m.chat, wtf.play, '', wtf.title, m)
  } catch (e) {
   throw e.toString();
  };
};
handler.help = handler.command = ['tttren', 'asupantt'];
handler.tags = ['tiktok'];

module.exports = handler;
/*let [t1, t2] = body.split`|`
  if (!/[0-9]/.test(t2)) throw ('only number')*/