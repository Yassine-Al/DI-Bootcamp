const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du fichier :', err);
    return;
  }
  console.log('Contenu du fichier :');
  console.log(data);
});
