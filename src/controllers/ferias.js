const FeriasModel = require('../models/ferias')

function post(req, res) {
    const {
        nome,
        cargo,
        setor,
        data_inicio,
        data_fim,
    } = req.body

    const ferias = new FeriasModel({
        nome,
        cargo,
        setor,
        data_inicio,
        data_fim,
    })

    ferias.save()

    res.send({
        message: 'success',
    })
}

async function get(req, res) {
    const { nome } = req.params

    const obj = nome ? { nome: nome } : null

    const ferias = await FeriasModel.find(obj)

    res.send(ferias)
}

module.exports = {
    post,
    get,
}