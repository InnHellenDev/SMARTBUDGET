"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR

var registro_controller = require('../controllers/registro.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


router.get('/', registro_controller.getAll_Registros); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', registro_controller.createRegistro);
router.get('/:id', registro_controller.getRegistro);
router.put('/:id', registro_controller.editRegistro);
router.delete('/:id', registro_controller.deleteRegistro);
module.exports = router; //EXPORTO MI OBJETO ROUTERS