const express = require ('express');//REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR
const router = express.Router();//EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//A MI OBJETO ROUTER LE VOY AGREGAR PROPIEDADES QUE VAN HACER LAS RUTAS

const Partidas2504_Controler = require('../controllers/partidas_2504.controller');//Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las
//const { getFuncionario } = require('../controllers/funcionario.controller');
//funciones que puedo hacer en un funcionario

router.get('/', Partidas2504_Controler.getAll_Partidas2504);//CUANDO PIDAN UNA PETICION GET AL SERVIDOR 
router.post('/', Partidas2504_Controler.createPartidas2504);
router.get('/:id', Partidas2504_Controler.getPartida2504);
router.put('/:id', Partidas2504_Controler.editPartidas2504);
router.delete('/:id', Partidas2504_Controler.deletePartida2504);
module.exports = router;//EXPORTO MI OBJETO ROUTERS