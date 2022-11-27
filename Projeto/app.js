const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('EXPRESS')
})

app.get('/', (req, res) => {
    res.send('EXPRESS')
})

app.get('/', (req, res) => {
    res.send('EXPRESS')
})

app.get('/', (req, res) => {
    res.send('EXPRESS')
})

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
})