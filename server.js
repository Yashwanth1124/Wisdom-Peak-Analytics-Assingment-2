const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
