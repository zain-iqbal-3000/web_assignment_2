const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const serverless = require('serverless-http');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://127.0.0.1:5500'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Serve static files from frontend folder
app.use(express.static('frontend'));

// Export the app as a serverless handler
module.exports.handler = serverless(app);