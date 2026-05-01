const empController = require('../controller/employee.js');
const express = require('express');
const router = express.Router();

router.post('/add', empController.addEmployee);
router.get('/', empController.getEmployees);
router.put('/:id', empController.updateEmployee);
router.delete('/:id', empController.deleteEmployee);

module.exports = router;