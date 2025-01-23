const express = require('express');
const { check } = require('express-validator');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('phone').notEmpty().withMessage('Phone number is required')
], roleMiddleware(['admin', 'user']), customerController.createCustomer);

router.get('/', roleMiddleware(['admin', 'user']), customerController.getCustomers);

router.get('/:id', roleMiddleware(['admin', 'user']), customerController.getCustomerById);

router.put('/:id', [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('phone').notEmpty().withMessage('Phone number is required')
], roleMiddleware(['admin']), customerController.updateCustomer);

router.delete('/:id', roleMiddleware(['admin']), customerController.deleteCustomer);

module.exports = router;
