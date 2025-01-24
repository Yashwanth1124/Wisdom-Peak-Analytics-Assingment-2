const express = require('express');
const { check } = require('express-validator');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure this import is correct

const router = express.Router();

// Use the authMiddleware to protect all routes
router.use(authMiddleware);

// Define the routes and the corresponding controllers
router.post('/', [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('phone').notEmpty().withMessage('Phone number is required')
], customerController.createCustomer);

router.get('/', customerController.getCustomers);

router.get('/:id', customerController.getCustomerById);

router.put('/:id', [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('phone').notEmpty().withMessage('Phone number is required')
], customerController.updateCustomer);

router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
