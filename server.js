const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const pacientes = require('./routes/pacientes.js')

mongoose.connect('mongodb+srv://meuadmin:matheus555@cluster0.wsthk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(bodyParser.json({ extended: false }))

app.use('/pacientes', pacientes)

app.listen(3000, err => {
    if(err) console.log(err)
    else    console.log('Servidor rodando na porta 3000')
})