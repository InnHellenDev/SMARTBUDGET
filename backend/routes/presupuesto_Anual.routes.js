//VAN LAS URL QUE VAN A ESTAR DISPONIBLES
//REST API: ES UNA APLICACION DEL SERVIDOR QUE LO UNICO QUE HACES ES RECIBIR Y ENVIAR DATOS SIN INTERFAZ ESO LE CORRESPONDE A ANGULAR
//Rutas encargado de guardar todas la rutas que va a acceder a los empleados se va a guardar - eliminarlos-listarlos- actualizarlos
//Rutas la utilizare como mi Rest API-- en otras palabras para enviar y recibir datos en formato json
const express = require ('express');//REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR
const router = express.Router();//EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

const presupuesto_Anual_Controler = require('../controllers/presupuesto_Anual.controller');//Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const partidas2504_controller = require('../controllers/partidas_2504.controller');
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario
//import {verifyToken} from "../middlewares";

router.get('/', presupuesto_Anual_Controler.getAll_Presupuesto_Anual);//CUANDO PIDAN UNA PETICION GET AL SERVIDOR 
router.post('/', presupuesto_Anual_Controler.createPresupuesto_Anual);
router.get('/:id', presupuesto_Anual_Controler.getPresupuesto_Anual);
router.put('/:id', presupuesto_Anual_Controler.editPresupuesto_Anual);
//router.put('/:id', partidas2504_controller.createPartidas2504);//Cada vez que se cree una partida tiene que actualizar el presupuesto anual.
router.delete('/:id', presupuesto_Anual_Controler.deletePresupuesto_Anual);
module.exports = router;//EXPORTO MI OBJETO ROUTERS