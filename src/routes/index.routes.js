const express = require('express');
const router = express.Router();

const index = require('../controllers/index.controller');

router.get('/', index.getIndexPage);
// router.post('/', index.createEmployee);
// router.get('/:id', index.getEmployee);
// router.put('/:id', index.editEmployee);
// router.delete('/:id', index.deleteEmployee);

module.exports = router;
