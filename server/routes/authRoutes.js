const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/verify-otp', authController.verifyOtp);
router.post('/reset-password', auth, authController.resetPassword);
router.post('/login', authController.login);
router.get('/user', auth, authController.getUserInfo);

module.exports = router;