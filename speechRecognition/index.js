const http = require("http")
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('<h1>Speech Recognition</h1>')}
    )
app.listen(port, () => {
    console.log(`server started at port 8080`)})