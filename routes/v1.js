/**
* This module connects rendering modules to routes
*/
const express = require('express');
const router = express.Router();
const { newUser } = require('./users');
const { hola } = require('./html');

router.post('/app/api/new_user', newUser);
router.get('/', hola);

module.exports = router;