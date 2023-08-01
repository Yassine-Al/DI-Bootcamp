const http = require('http'); 

const getCurrentDateTime = require('./main.js');
const importedNumber = require('./main.js');
const b = 5;
const sum = importedNumber + b;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
  
  // Répondre avec le contenu HTML
//   res.end(`
//     <h1>Bonjour à l'interface</h1>
//     <p>My Module is ${sum}</p>
//   `);

    res.end(`
        <html>
        <head>
            <title>Date et Heure Actuelles</title>
        </head>
        <body>
            <p>Date et Heure Actuelles : ${currentDateTime}</p>
        </body>
        </html>
    `);
});

// const PORT = 3000;

const PORT = 8080;

server.listen(PORT, () => {
  console.log("I'm listening on http://localhost:" + PORT);
});




