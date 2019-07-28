const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send(Hola Mundo ExpressJS!'))

app.listen(port, () => console.log(`Servidor Web escuchando puerto ${port}!`))
