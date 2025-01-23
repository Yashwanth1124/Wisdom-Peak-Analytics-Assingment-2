const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    check('role').isIn(['admin', 'user']).withMessage('Invalid role')
], authController.register);

router.post('/login', [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').notEmpty().withMessage('Password is required')
], authController.login);

module.exports = router;
