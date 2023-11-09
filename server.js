// Sfruttando l’api https://api.chucknorris.io/jokes/random creare un applicazione che scarica una battuta random, la aggiunge ad un file json norrisDb.json e la mostra all’utente.
// Il file json quindi dovrà contenere la lista di tutte le battute scaricate nell’arco del tempo.

// Importa i moduli necessari
const http = require('http');  // Per creare il server HTTP
const axios = require('axios');  // Per effettuare richieste HTTP
const fs = require('fs');  // Per leggere e scrivere file
const dotenv = require('dotenv');  // Per gestire le variabili d'ambiente
dotenv.config();  // Carica le variabili d'ambiente da un file .env

// Imposta la porta del server
const port = process.env.PORT || 3001;

// Definisci il percorso del file JSON in cui verranno salvate le battute
const JSON_FILE = 'norrisDb.json';

// URL dell'API di Chuck Norris per ottenere una battuta casuale
const API_URL = 'https://api.chucknorris.io/jokes/random';


// Crea il server HTTP
const server = http.createServer(function (req, res) {  
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {

        
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write(`<h1>${data.value}</h1>`);
        res.end();
    })
});

// Avvia il server sulla porta specificata
server.listen(port, function () {
  console.log(`Server in ascolto sulla porta ${port}`);
});
