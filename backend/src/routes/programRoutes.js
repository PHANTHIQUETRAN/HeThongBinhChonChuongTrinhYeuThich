const express = require('express');
const router = express.Router();
const controller = require('../controllers/programController');

router.get('/', controller.getAllPrograms);
router.post('/', controller.createProgram);

module.exports = router;