"use strict";

var app = require('./app'); //require("./database");
//Funcion para iniciar el servidor llamada = Starting the server 


app.listen(app.get('port'), () => {
  //APP ESCUCHE EN UN PUERTO
  console.log("Server on port ".concat(app.get('port')));
});