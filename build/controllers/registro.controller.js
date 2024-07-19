"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registromodel = require('../models/registro');

var registro_controller = {};

registro_controller.getAll_Registros = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var regis = yield registromodel.find(); //Busca todo el presupuesto anula en la DB

    res.json(regis);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

registro_controller.createRegistro = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var regist = new registromodel({
      numero_Solicitud: req.body.numero_Solicitud,
      orden_Compra: req.body.orden_Compra,
      codigo_Actividad: req.body.codigo_Actividad,
      codigo_Partida: req.body.codigo_Partida,
      codigo_Reserva: req.body.codigo_Reserva,
      monto: req.body.monto,
      observaciones: req.body.observaciones
    });
    yield regist.save();
    res.json({
      'status': 'Solicitud Guardada'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

registro_controller.getRegistro = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    //OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    var {
      id
    } = req.params;
    var regist = yield registromodel.findById(id);
    res.json(regist);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

registro_controller.editRegistro = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var regist = {
      numero_Solicitud: req.body.numero_Solicitud,
      orden_Compra: req.body.orden_Compra,
      codigo_Actividad: req.body.codigo_Actividad,
      codigo_Partida: req.body.codigo_Partida,
      codigo_Reserva: req.body.codigo_Reserva,
      monto: req.body.monto,
      observaciones: req.body.observaciones
    };
    yield registromodel.findByIdAndUpdate(id, {
      $set: regist
    }, {
      new: true
    });
    res.json({
      'Status': ' Registro Actualizado'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

registro_controller.deleteRegistro = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield registromodel.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Registro Eliminado'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = registro_controller; //Para exportar mi objeto y asi agregar multiples metodos