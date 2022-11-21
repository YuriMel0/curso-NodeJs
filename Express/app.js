const express = require("express")
const port = 3000

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World Express")
})

app.get("/mensagem", (req, res) => {
    res.send("Treinando endpoints com express")
})

app.get("/parametros/:nome/:idade", (req, res) => {
    res.send(req.params)
})

app.listen(port, function () {
    console.log("Rodando em http://localhost:3000")
})