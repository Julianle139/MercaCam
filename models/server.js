const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //middleware()
        this.middleware(); 
    }
 //rutas de la APP
    routes(){
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor Conectado")
        })
    }

    middleware(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

}

module.exports = Server