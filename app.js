// Import the express module by specifying the name of the module as a string ('express'), and then calling the returned object to create an Express application.
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
// Serving files from 'public' directory.
app.use(express.static(__dirname + 'public'));

// These are the routes defined for GET method.
app.get('/', (req, res) => {
    // Transfers the file at given path.
    res.sendFile(path.join(__dirname + '/public/searchBar.html'));
})

app.get('/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/stylesheet.css'))
})

app.get('/speechrecognition.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/speechRecognition.js'))
})

app.get('/microphone.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/microphone.png'))
})

// Binds and Listens for connections on specified host & port.
app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
