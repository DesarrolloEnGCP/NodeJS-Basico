const host = 'localhost';
const port = 8080;

const http = require('http');
const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo!');
});
servidor.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
