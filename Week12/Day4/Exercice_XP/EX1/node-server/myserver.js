const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<h1>Bienvenue sur mon serveur Node.js!</h1>');
  res.write('<p>Ceci est ma première ligne HTML.</p>');
  res.write('<p>Ceci est ma deuxième ligne HTML.</p>');

  res.end();
});

const PORT = 3000;
const HOSTNAME = 'localhost';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Serveur en cours d'exécution sur http://${HOSTNAME}:${PORT}/`);
});