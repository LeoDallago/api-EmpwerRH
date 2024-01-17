const EmployeesModel = require('../models/employees')


async function get(req, res) {
    const { name } = req.params

    const obj = name ? { name: name } : null

    const employee = await EmployeesModel.find(obj)

    res.send(employee)
}

async function post(req, res) {
    const {
        name,
        birthday,
        gender,
        phone,
        marital_status,
        responsibility,
        department,
    } = req.body

    const employee = new EmployeesModel({
        name,
        birthday,
        gender,
        phone,
        marital_status,
        responsibility,
        department,
    })


    employee.save()

    res.send({
        message: 'success',
    })
}

async function put(req, res) {
    const { id } = req.params

    const employee = await EmployeesModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        employee,
    })
}

async function remove(req, res) {
    const { name } = req.body

    const remove = await EmployeesModel.deleteOne({ name: name })

    res.send({
        message: 'success',
    })
}


module.exports = {
    post,
    get,
    remove,
    put,
}