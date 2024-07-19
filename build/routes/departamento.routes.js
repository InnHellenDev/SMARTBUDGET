"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

var departamentos_Controler = require('../controllers/departamentos.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario


router.get('/', departamentos_Controler.getAll_Departamentos); //CUANDO PIDAN UNA PETICION GET AL SERVIDOR 

router.post('/', departamentos_Controler.createDepartamento);
router.get('/:id', departamentos_Controler.getDepartamento);
router.put('/:id', departamentos_Controler.editDepartamento);
router.delete('/:id', departamentos_Controler.deleteDepartamento);
module.exports = router; //EXPORTO MI OBJETO ROUTERS