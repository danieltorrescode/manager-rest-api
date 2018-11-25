const express = require('express');
const router = express.Router();
const passport = require('passport');
const department = require('../controllers/departments.controller');

router.get('/', department.getDepartments);
router.post('/', passport.authenticate('jwt', {session:false}), department.createDepartment);
router.get('/:id', passport.authenticate('jwt', {session:false}), department.getDepartment);
router.put('/:id', passport.authenticate('jwt', {session:false}), department.editDepartment);
router.delete('/:id', passport.authenticate('jwt', {session:false}), department.deleteDepartment);

module.exports = router;
