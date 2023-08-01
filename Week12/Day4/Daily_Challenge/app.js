const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Itinéraire /aboutMe/:hobby
app.get('/aboutMe/:hobby', (req, res) => {
  const { hobby } = req.params;
  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid hobby parameter. Hobby must be a string.');
  } else {
    res.send(`My hobby is ${hobby}.`);
  }
});

// Itinéraire /pic
app.get('/pic', (req, res) => {
  const imagePath = path.join(__dirname, 'public', 'image.jpg');
  res.sendFile(imagePath);
});

// Itinéraire /form
app.get('/form', (req, res) => {
  const formPath = path.join(__dirname, 'public', 'form.html');
  res.sendFile(formPath);
});

app.post('/formData', (req, res) => {
  const { email, message } = req.body;

  res.send(`${email} vous a envoyé un message : "${message}"`);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
