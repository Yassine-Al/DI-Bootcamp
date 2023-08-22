// Fetch data from the server and display it in the DOM
fetch('/users')
    .then(response => response.json())
    .then(data => {
        const userInfoDiv = document.getElementById('user-info');
        userInfoDiv.textContent = `First Name: ${data.firstname}, Last Name: ${data.lastname}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
