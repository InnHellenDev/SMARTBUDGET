"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

var actividad_Controler = require('../controllers/actividad.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


router.get('/', actividad_Controler.getAll_Actividad); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', actividad_Controler.createActividad);
router.get('/:id', actividad_Controler.getActividad);
router.put('/:id', actividad_Controler.editActividad);
router.delete('/:id', actividad_Controler.deleteActividad);
module.exports = router; //EXPORTO MI OBJETO ROUTERS