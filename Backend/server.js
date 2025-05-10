// const express = require('express');
// const serverless = require('serverless-http');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const taskRoutes = require('./routes/taskRoutes');

// // Connect to database
// connectDB();

// const app = express();

// // Middleware
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://127.0.0.1:5500'],
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // Routes
// app.use('/api/tasks', taskRoutes);

// // Export the app as a serverless handler
// module.exports.handler = serverless(app);

const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to Express.js');
});

module.exports.handler = serverless(app);