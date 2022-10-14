require("dotenv").config(); // For pulling .env variables.
console.log(`\nRunning in environment: ${process.env.MODE}\n`);

const express = require('express');
const app = express()
const port = process.env.SERVER_PORT;

// Global Middleware
require('./middleware/setupMiddleware')(app);

// Setup routes with their respective controllers
require('./controllers/setupRoutesAndControllers')(app, express);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})