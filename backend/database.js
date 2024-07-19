//Archivo para conectarme a la base de datos
//Configurar base de datos para conectarse con Mongo
//Se debe instalar mongoose como dependencia ya que el express necesita el modulo para conectarse y al ademas tambien sirve para modelar la bd
//const mongoose = require('mongoose');//PARA DECIERLE A EXPRESS QUE SE CONECTE A MONGODB NECESITO MONGOOSE
//const URI = 'mongodb://localhost/DB_Presupuesto2504';//URI O URL LE DIGO DONDE ESTA MI BASE DE DATOS URI ES LA CONEXION
import mongoose from "mongoose";
import config from "./config";

mongoose.connect(config.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})//URI ES EL LUGAR DONDE SE ENCUENTRA MI BD
.then(db=>console.log('Base de Datos Conectada'))
.catch (err => console.error(err));

//module.exports=mongoose;