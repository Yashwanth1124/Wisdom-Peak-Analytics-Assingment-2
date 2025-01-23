const Customer = require('../models/customer');
const { validationResult } = require('express-validator');

exports.createCustomer = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, phone, company } = req.body;
        const customer = await Customer.create({ name, email, phone, company, userId: req.userId });
        res.status(201).json({ message: 'Customer created successfully', customer });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Other CRUD operations (read, update, delete)

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({ userId: req.userId });
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findOne({ _id: req.params.id, userId: req.userId });
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateCustomer = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, phone, company } = req.body;
        const customer = await Customer.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            { name, email, phone, company },
            { new: true }
        );

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.status(200).json({ message: 'Customer updated successfully', customer });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findOneAndDelete({ _id: req.params.id, userId: req.userId });

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.status(204).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
