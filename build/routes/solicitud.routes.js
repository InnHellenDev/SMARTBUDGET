"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR

var solicitud_Controler = require('../controllers/solicitud.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


router.get('/', solicitud_Controler.getAll_Solicitudes); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', solicitud_Controler.createSolicitud);
router.get('/:id', solicitud_Controler.getSolicitud);
router.put('/:id', solicitud_Controler.editSolicitud);
router.delete('/:id', solicitud_Controler.deleteSolicitud);
module.exports = router; //EXPORTO MI OBJETO ROUTERS