const express = require('express');
const app = express();

// Define a route for /users
app.get('/users', (req, res) => {
    const user = { firstname: 'John', lastname: 'Doe' };
    res.json(user);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});