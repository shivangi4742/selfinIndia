const employeerouter = require('express').Router();

const customerController = require('../controllers/employeeController');

employeerouter.get('/getemolpyeedetails', customerController.list);
employeerouter.post('/add', customerController.save);
employeerouter.get('/edit/:id', customerController.edit);
employeerouter.post('/update/:id', customerController.update);
employeerouter.post('/delete', customerController.delete);

module.exports = employeerouter;
