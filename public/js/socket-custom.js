let socket = io();

socket.on('connect', function() {

    console.log('Conectado en el servidor')
});
//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    user: 'Cesario',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('Servidor: ', res);
});

//Escuchar informacion
socket.on('enviarMensaje', function(message) {

    console.log('Servidor', message);
});