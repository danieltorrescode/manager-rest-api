const express = require('express');
const router = express.Router();
const passport = require('passport');
const employee = require('../controllers/employees.controller');

router.get('/', employee.getEmployees);
router.post('/', passport.authenticate('jwt', {session:false}), employee.createEmployee);
router.get('/:id', passport.authenticate('jwt', {session:false}), employee.getEmployee);
router.put('/:id', passport.authenticate('jwt', {session:false}), employee.editEmployee);
router.delete('/:id', passport.authenticate('jwt', {session:false}), employee.deleteEmployee);

module.exports = router;
