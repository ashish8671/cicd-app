const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD App Running - Ashish");
}).listen(3000);