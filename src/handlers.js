const fs = require('fs');
const path = require('path');


const handlers = {};

handlers.serveLanding = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const readStream = fs.createReadStream(path.join(__dirname, '..', 'public', 'index.html'));
  readStream.pipe(res);
};


module.exports = handlers;
