// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const logger = require('./middleware/logger');
const validateProduct = require('./middleware/validateProduct');
const {AppError,notFoundError,UnauthorizedError} = require('./errors/customErrors');
const wrongRoutes = require('./middleware/routeError');
const router = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');



// Load environment variables from .env file
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT;

// Middleware setup
app.use(bodyParser.json());

app.use(logger)
// app.use(apiKey)
// Root route


app.use('/', router)
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products


// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling
app.get('/test',(req,res, next) =>{
  next(new notFoundError())
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(wrongRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 