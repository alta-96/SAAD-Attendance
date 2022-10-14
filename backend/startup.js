require("dotenv").config(); // For pulling .env variables.
console.log(`\nRunning in environment: ${process.env.MODE} on port: ${process.env.SERVER_PORT}\n`);

const app = require("./server");

app.listen(process.env.SERVER_PORT);