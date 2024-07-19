import app from "./app";
import './database';

//Funcion para iniciar el servidor llamada = Starting the server 
//app.listen(app.get('port'), () => {//APP ESCUCHE EN UN PUERTO
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get('port')}`);
