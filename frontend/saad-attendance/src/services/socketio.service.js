import { io } from 'socket.io-client';

var socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

class SocketioService {

    async setupSocket(session){
        return new Promise(async (res, error) => {
    
            console.log("sessionID recieved on socket emit: " +  session)
            await socket.emit('sessionExists', session, result => {
                res(result);
            })
        });
    }


    disconnect() {
        if (socket) {
            socket.disconnect();
        }
    }




}

