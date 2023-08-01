var xhr = new XMLHttpRequest();

var searchTerm = "soleil";
var rating = "g";
var apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
var limit = 10;
var offset = 2;

var url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=${rating}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

xhr.open("GET", url, true);

xhr.onload = function() {
  if (xhr.status === 200) {
    // Conversion de la réponse JSON en objet JavaScript
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.log("Erreur lors de la requête. Statut :" + xhr.status);
  }
};

xhr.send();