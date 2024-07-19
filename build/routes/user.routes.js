"use strict";

var express = require('express'); //REQUIERO EXPRESS NO PARA CREAR UN SERVIDOR SI NO PARA CREAR RUTAS DEL SERVIDOR


var router = express.Router(); //EL MODULO ROUTERS ME DEVUELVE UN OBJETO QUE TENGO QUE ALMACENAR
//import { Router } from "express";
//const router = Router();

var usersCtrl = require('../controllers/user.controller'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


var verifySignup = require('../middlewares'); //Estoy requiriendo el el objeto FuncionarioCtrl-- Asi tengo todas las


var authJwt = require('../middlewares'); //import * as usersCtrl from "../controllers/user.controller";
//import { authJwt, verifySignup } from "../middlewares";


router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.createUser); //export default router;

module.exports = router; //EXPORTO MI OBJETO ROUTERS