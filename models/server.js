const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // endpoints
    this.usuariosPath = '/api/usuarios';

    // Middlewares
    this.middleware();

    // Rutas
    this.routes();
  }

  middleware() {
    // Directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}



module.exports = Server;
