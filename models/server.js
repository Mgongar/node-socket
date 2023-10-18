require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {socketController} = require('../sockets/controller');



class Server{
    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        //Mis paths
        this.paths = {
        }

        //middleware
        this.middleware();

        //Rutas de la aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

   middleware(){

    //CORS
    this.app.use(cors());

    //Directorio Público
    this.app.use(express.static('public'));

   
   }
    
   routes() {
        
    //this.app.use( this.paths.uploads, require('../routes/uploads'));
    }
    sockets(){
        this.io.on('connection', socketController );
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log(`El puerto en el que se ejecuta es: `, this.port);
          })
    }

    
}

module.exports=Server;