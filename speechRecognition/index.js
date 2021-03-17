const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Speech Recognition'))
app.listen(port, () => console.log(`this application listening on port 8080`))