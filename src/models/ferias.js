const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    cargo: String,
    setor: String,
    data_inicio: String,
    data_fim: String,
})

const Model = mongoose.model('Ferias', schema)

module.exports = Model