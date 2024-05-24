const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');
router.post('/signin',userAuthController.signIn);
module.exports = router;