var xhr = new XMLHttpRequest();

var url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

xhr.open("GET", url, true); 

xhr.onload = function() {
  if (xhr.status === 200) {

    var response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.log("Erreur lors de la requête. Statut :" + xhr.status);
  }
};

xhr.send();
