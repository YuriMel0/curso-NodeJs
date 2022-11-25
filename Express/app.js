const express = require("express")
const port = 3000

const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/parametros/:nome/:idade", (req, res) => {
    res.send(req.params)
})

app.listen(port, () => { console.log("Rodando em http://localhost:3000") })