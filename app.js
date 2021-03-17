const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(__dirname + 'public'));

// HTML
app.get('/', (req, res) => {
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

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
