const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: String,
    birthday: String,
    gender: String,
    phone: Number,
    marital_status: String,
    responsibility: String,
    department: String,
})

const Model = mongoose.model('employees', schema)

module.exports = Model