const express = require('express');
var bodyParser = require('body-parser');
const websocketService = require('./services/websocket.service');

const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
//app.use(cors());

const PORT = 8080;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(PORT, () => console.log('Server started on port ' + PORT + '')); 


websocketService.init(io);

