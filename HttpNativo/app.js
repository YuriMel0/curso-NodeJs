const http = require('http')
const port = 3000

http.createServer((req, res) => {
    res.end('Hello World Web')
}).listen(port)

console.log(`servidor rodando na porta ${port}`)
