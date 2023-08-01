const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Salut depuis le serveur Express!</h1>');
});

app.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur http://localhost:3000/');
});
