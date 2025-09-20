// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Hiển thị form
router.get('/login', authController.loginForm);
router.get('/register', authController.registerForm);
router.get('/forgot', authController.forgotForm);

// Xử lý form
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/forgot', authController.forgot);

router.get('/logout', authController.logout);

module.exports = router;
