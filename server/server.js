const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
require('./config/database');

app.use('/api/auth', authRoutes);
console.log(app._router.stack.filter(r => r.route).map(r => r.route.path));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    try {
        console.log(`Server running on port ${PORT}`);
    } catch (err) {
        console.error('Error starting the server:', err);
        process.exit(1);
    }
});
