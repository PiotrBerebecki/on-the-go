const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const url = req.url;

  if (url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    const readStream = fs.createReadStream(path.join(__dirname, '..', 'public', 'index.html'));
    readStream.pipe(res);

  }

}

module.exports = router;
