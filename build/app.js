"use strict";

//Archivo que arranca el servidor
var express = require('express'); //SE REQUIERE EXPRESS  Y SE CREA UNA CONSTANTE CON EL MISMO NOMBRE


var app = express(); //LA CONSTANTE O VARIABLE APP ES LA ENCARGADA DE TENER TODA LA FUNCIONALIDAD DEL SERVIDOR

var morgan = require('morgan'); //COMENTAR 


var cors = require('cors');

var {
  mongoose
} = require('./database'); //Estoy indicando que requiero el archivo database--REQUIERO LA CONEXION
// Settings= configuracion de servidor 


app.set('port', process.env.PORT || 3000); // OBTIENE EL PUERTO DADO POR EL SO Y SI NO EXSISTE USE EL PUERTO 3000 ESTA LINEA OBTIENE EL PUERTO QUE ME VAYA A DAR LA NUBE Y SE PUEDE ACCESAR A ELLA DE CUALQUIER PARTE
// Middlewares-- Esto es cuando tengo multiples rutas del servidor y existen modulos que hacen eso por nosotros
// El modulo morgan es para saber lo que el usuario esta pidiendo

app.use(cors({
  origin: 'http://localhost:4200'
  //origin: 'http://ccssvarcalinux01-devs.caja.ccss.sa.cr:4200'
})); //Indico que servidor se puede conectar a mi backend

app.use(morgan('dev')); // COMENTAR-Para ver los msj en consola-- Todo lo que va adentro de use es una funcion para ejecutar. 

app.use(express.json()); //Configuracon del servidor para que entienda formato json - Cuando del navegador venga formato json que mi servidor lo pueda entender
//aNGULAR VA ENVIAR DATOS EN FORMATO JSON Y MI SERVIDOR DEBE ENTENDERLO
//LA VARIABLE O CONSTANTE REQ.BODY ES DONDE VA A VENIR LA INFORMACION DEL NAVEGADOR-FRONTEND
// Rutas del servidor = Routes

app.use('/smartbudget/presupuesto_Anual', require('./routes/presupuesto_Anual.routes')); //USE LO QUE SE REQUIRE DE LA CARPETA ROUTES

app.use('/smartbudget/funcionarios_2504', require('./routes/funcionarios.routes'));
app.use('/smartbudget/partidas_2504', require('./routes/partidas_2504.routes'));
app.use('/smartbudget/actividad', require('./routes/actividad.routes'));
app.use('/smartbudget/departamento', require('./routes/departamento.routes'));
app.use('/smartbudget/reservas', require('./routes/reservas.routes'));
app.use('/smartbudget/solicitud', require('./routes/solicitud.routes'));
app.use('/smartbudget/movimiento', require('./routes/movimiento.routes')); //app.use('/smartbudget/users' , require('./routes/user.routes'));
//app.use("/smartbudget/users", usersRoutes);
//app.use("/smartbudget/auth", authRoutes);
// Routes DE LOGUIN
//app.use('/smartbudget/products', require('./routes/products.routes'));
//app.use("/smartbudget/users", usersRoutes);
//app.use("/smartbudget/auth", authRoutes);

module.exports = app;