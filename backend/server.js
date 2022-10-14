const express = require('express');
const app = express()

// Global Middleware
require('./middleware/setupMiddleware')(app);

// Setup routes with their respective controllers
require('./controllers/setupRoutesAndControllers')(app, express);


module.exports = app;