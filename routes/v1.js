/**
* This module connects rendering modules to routes
*/
const express = require('express');
const router = express.Router();
const { newUser } = require('./users');

router.post('/app/api/new_user', newUser);

module.exports = router;