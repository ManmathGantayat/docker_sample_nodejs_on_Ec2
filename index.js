var http = require('http');

const PORT = 3000;

http.createServer(function (req, res) {
  res.write('Welcome to DevOps Training');
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
