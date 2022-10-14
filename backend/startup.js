require("dotenv").config(); // For pulling .env variables.
console.log(`\nRunning in environment: ${process.env.MODE} on port: ${process.env.SERVER_PORT}\n`);

const app = require("./server");

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const websocketService = require('./websocketService');

websocketService.init(io);

server.listen(process.env.SERVER_PORT, () => console.log('Server started on port ' + process.env.SERVER_PORT + '')); 
   
//app.listen(process.env.SERVER_PORT);