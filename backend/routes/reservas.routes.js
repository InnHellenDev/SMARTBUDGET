const express = require ('express');//REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR
const router = express.Router();//EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

const reservas_Controler = require('../controllers/reservas.controller');//Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario

router.get('/', reservas_Controler.getAll_Reservas);//CUANDO PIDAN UNA PETICION GET AL SERVIDOR 
router.post('/', reservas_Controler.createReserva);
router.get('/:id', reservas_Controler.getReserva);
router.put('/:id', reservas_Controler.editReserva);
router.delete('/:id', reservas_Controler.deleteReserva);
module.exports = router;//EXPORTO MI OBJETO ROUTERS