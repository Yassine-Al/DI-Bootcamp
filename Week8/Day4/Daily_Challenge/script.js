const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function addGif(imageUrl) {
    const gifDiv = document.createElement("div");
    const gifImage = document.createElement("img");
    const deleteBtn = document.createElement("button");

    gifImage.src = imageUrl;

    deleteBtn.textContent = "SUPPRIMER";
    deleteBtn.addEventListener("click", function() {
        gifDiv.remove();
    });

    gifDiv.appendChild(gifImage);
    gifDiv.appendChild(deleteBtn);

    document.getElementById("gifContainer").appendChild(gifDiv);
}


function getRandomGif(category) {
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`;

    $.getJSON(apiUrl, function(data) {
        const imageUrl = data.data.images.original.url;
        addGif(imageUrl);
    });
}


document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const searchInput = document.getElementById("searchInput");
    const category = searchInput.value;

    getRandomGif(category);

    searchInput.value = "";
});

document.getElementById("deleteAllBtn").addEventListener("click", function() {
    document.getElementById("gifContainer").innerHTML = "";
});