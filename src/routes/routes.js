const router = require('express').Router()

const EmployeeController = require('../controllers/employees')
const FeriasController = require('../controllers/ferias')

router.get('/employees/:name?', EmployeeController.get)
router.post('/employees', EmployeeController.post)
router.put('/employees/:id', EmployeeController.put)
router.delete('/employees/:id?', EmployeeController.remove)

router.get('/ferias/:nome', FeriasController.get)
router.post('/ferias', FeriasController.post)

module.exports = router