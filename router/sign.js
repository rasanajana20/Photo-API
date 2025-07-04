
const express = require('express');
const router = express.Router();
const sign = require('../controller/sign'); 

router.get('/users', sign.getUsers);
router.post('/addUser', sign.addUser);

module.exports = router;
