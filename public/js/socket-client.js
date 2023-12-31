
//Referencias del HTML

 const lblOnline  = document.querySelector('#online');
 const lblOffline = document.querySelector('#offline');
 const btnEnviar  = document.querySelector('#btnEnviar');
 const txtMensaje = document.querySelector('#txtMensaje');




const socket = io();


socket.on('connect', () =>{
    // console.log('Conectado');
 
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () =>{
    // console.log('Desconectado del servidor');
    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
});

socket.on('enviar-mensaje',(payload) => {
    console.log(payload);
})

btnEnviar.addEventListener( 'click', () =>{
    const mensaje= txtMensaje.value;
    const payload={
        mensaje,
        id: '12345gg',
        fecha: new Date().getTime()
    }
    socket.emit( 'enviar-mensaje', payload, ( id ) =>{
        console.log( 'Desde el server', id );
    } );
})
