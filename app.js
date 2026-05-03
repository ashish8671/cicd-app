const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD App Running - Version 2");
}).listen(3000);