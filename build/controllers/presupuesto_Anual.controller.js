"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
var presupuesto_AnualModel = require('../models/presupuesto_Anual_model');

var presupuesto_AnualController = {}; //Definicion de un objeto llamado controlador de Presupuesto Anual

presupuesto_AnualController.getAll_Presupuesto_Anual = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var presup_Anual = yield presupuesto_AnualModel.find(); //Busca todo el presupuesto anula en la DB

    res.json(presup_Anual);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

presupuesto_AnualController.createPresupuesto_Anual = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var presup_Anual = new presupuesto_AnualModel({
      codigo_Asignacion: req.body.codigo_Asignacion,
      presupuesto_Anual: req.body.presupuesto_Anual,
      presupuesto_Disponible: req.body.presupuesto_Disponible,
      presupuesto_ano: req.body.presupuesto_ano //periodo_Desde: req.body.periodo_Desde,
      //periodo_Hasta: req.body.periodo_Hasta

    });
    yield presup_Anual.save();
    res.json({
      'status': 'Presupuesto Guardado'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

presupuesto_AnualController.getPresupuesto_Anual = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    //OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    var {
      id
    } = req.params;
    var presup_Anual = yield presupuesto_AnualModel.findById(id);
    res.json(presup_Anual);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

presupuesto_AnualController.editPresupuesto_Anual = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var presup_Anual = {
      codigo_Asignacion: req.body.codigo_Asignacion,
      presupuesto_Anual: req.body.presupuesto_Anual,
      presupuesto_Disponible: req.body.presupuesto_Disponible,
      presupuesto_ano: req.body.presupuesto_ano //periodo_Desde: req.body.periodo_Desde,
      //periodo_Hasta: req.body.periodo_Hasta

    };
    yield presupuesto_AnualModel.findByIdAndUpdate(id, {
      $set: presup_Anual
    }, {
      new: true
    });
    res.json({
      'Status': ' Presupuesto Anual Actualizado'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

presupuesto_AnualController.deletePresupuesto_Anual = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield presupuesto_AnualModel.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Presupuesto Anual Eliminado'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = presupuesto_AnualController; //Para exportar mi objeto y asi agregar multiples metodos