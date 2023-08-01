const http = require('http');

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

const port = 8080;
const hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
