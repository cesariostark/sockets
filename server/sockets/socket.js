const { io } = require('../server');


io.on('connection', (client) => {


    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Admin',
        message: 'Bienvenido a socket'
    });
    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    //Listen client
    client.on('enviarMensaje', (data, callback) => {
        // console.log(data);

        //Broadcast emite a todos los usuarios
        client.broadcast.emit('enviarMensaje', data)
            /*  if (message.user) {
                 callback({
                     message: 'OK'
                 });
             } else {
                 callback({
                     message: 'MAL :('
                 });
             } */

    });
});