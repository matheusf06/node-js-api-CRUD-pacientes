const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const pacientes = require('./routes/pacientes.js')

mongoose.connect('mongodb+srv://meuadmin:matheus555@cluster0.wsthk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(cors())

app.use(bodyParser.json({ extended: false }))

app.use('/pacientes', pacientes)

app.get('/', (req,res) => {
    res.send("Olá seja bem vindo a minha API. Acesse /pacientes para ver a lista de pacientes cadastrados")
})

app.listen(port, err => {
    if(err) console.log(err)
    else    console.log('Servidor rodando na porta', port)
})