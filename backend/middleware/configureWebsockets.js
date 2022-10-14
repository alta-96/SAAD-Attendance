function init(io) {
    // Code here
    io.on('connection', (socket) => {

        socket.on('updateClients', async (jwt) => {
            /*
                // this wont work on the frontend anyway... would have to be done after a callback
                var object = jwt.unserialise 
                if(clients[object.name] exists){
                clients[object.name] = newsocketid
                }else{
                    new client...
                }
            */

        })

        socket.on('disconnect', ()=>{
                //delete client
        });
    
    });


}

module.exports = {
    init,
}