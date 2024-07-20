"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR

var movimiento_controller = require('../controllers/movimiento.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


router.get('/', movimiento_controller.getAll_Movimientos); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', movimiento_controller.createMovimiento);
router.get('/:id', movimiento_controller.getMovimiento);
router.put('/:id', movimiento_controller.editMovimiento);
router.delete('/:id', movimiento_controller.deleteMovimiento);
module.exports = router; //EXPORTO MI OBJETO ROUTERS