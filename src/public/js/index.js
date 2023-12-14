//ACA SIGUE SIENDO FRONT 

const socket = io() ; 

socket.on('connect', () => {
  console.log('Conexión establecida con el servidor de Socket.io')
})

 

