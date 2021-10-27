require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Module Imports
const connectToDatabase = require('./config/db');

// Express app
const app = express();

// Database connection
connectToDatabase();

// Middlewares configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan(':method :url :status - :response-time ms'));

app.listen(process.env.PORT, () => {
    console.log('Server is running at port: ' + process.env.PORT);
})

