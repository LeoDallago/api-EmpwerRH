const router = require('express').Router()

const EmployeeController = require('../controllers/employees')

router.get('/employees/:name?', EmployeeController.get)
router.post('/employees', EmployeeController.post)
router.put('/employees/:id', EmployeeController.put)
router.delete('/employees/:id?', EmployeeController.remove)


module.exports = router