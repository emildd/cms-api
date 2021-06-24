const express = require('express');
const router = express.Router();
const { UserController } = require('./controllers/index')
router.get('/',UserController.index);
module.exports = router;