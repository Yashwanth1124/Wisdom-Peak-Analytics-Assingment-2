const Customer = require('../models/customer');

exports.createCustomer = async (data) => {
    return await Customer.create(data);
};

exports.getCustomers = async (userId) => {
    return await Customer.find({ userId });
};

exports.getCustomerById = async (id, userId) => {
    return await Customer.findOne({ _id: id, userId });
};

exports.updateCustomer = async (id, data, userId) => {
    const customer = await Customer.findOneAndUpdate({ _id: id, userId }, data, { new: true });
    if (!customer) {
        return null;
    }
    return customer;
};

exports.deleteCustomer = async (id, userId) => {
    return await Customer.findOneAndDelete({ _id: id, userId });
};
