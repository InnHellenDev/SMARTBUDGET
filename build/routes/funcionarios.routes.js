"use strict";

//VAN LAS URL QUE VAN A ESTAR DISPONIBLES
//REST API: ES UNA APLICACION DEL SERVIDOR QUE LO UNICO QUE HACES ES RECIBIR Y ENVIAR DATOS SIN INTERFAZ ESO LE CORRESPONDE A ANGULAR
//Rutas encargado de guardar todas la rutas que va a acceder a los empleados se va a guardar - eliminarlos-listarlos- actualizarlos
//Rutas la utilizare como mi Rest API-- en otras palabras para enviar y recibir datos en formato json
var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

var funcionarioControlador = require('../controllers/funcionario.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario
//const Partidas2504_Controler = require('../controllers/partidas_2504.controller');//Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


router.get('/', funcionarioControlador.getAllFuncionarios); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', funcionarioControlador.createFuncionario);
router.get('/:id', funcionarioControlador.getFuncionario);
router.put('/:id', funcionarioControlador.editFuncionario);
router.delete('/:id', funcionarioControlador.deleteFuncionario);
module.exports = router; //EXPORTO MI OBJETO ROUTERS
//const Partidas2504_Controler = require('../controllers/partidas_2504.controller');//Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario

/*
router.get('/', Partidas2504_Controler.getAll_Partidas2504);//CUANDO PIDAN UNA PETICION GET AL SERVIDOR 
router.post('/', Partidas2504_Controler.createPartidas2504);
router.get('/:id', Partidas2504_Controler.getPartida2504);
router.put('/:id', Partidas2504_Controler.editPartidas2504);
router.delete('/:id', Partidas2504_Controler.deletePartida2504);
module.exports = router;//EXPORTO MI OBJETO ROUTERS*/