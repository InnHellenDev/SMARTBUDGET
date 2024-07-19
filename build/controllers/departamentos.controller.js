"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
var departamento_model = require('../models/departamento');

var departamentos_controller = {}; //Definicion de un objeto llamado controlador de Servicio

departamentos_controller.getAll_Departamentos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var depart = yield departamento_model.find(); //Busca todo el Servicio anula en la DB

    res.json(depart);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

departamentos_controller.createDepartamento = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var depart = new departamento_model({
      codigo_Departamento: req.body.codigo_Departamento,
      nombre_Departamento: req.body.nombre_Departamento,
      monto_Ejecutado: req.body.monto_Ejecutado
    });
    yield depart.save();
    res.json({
      'status': 'Departamento Guardado'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

departamentos_controller.getDepartamento = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var depart = yield departamento_model.findById(id);
    res.json(depart);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

departamentos_controller.editDepartamento = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var depart = {
      codigo_Departamento: req.body.codigo_Departamento,
      nombre_Departamento: req.body.nombre_Departamento,
      monto_Ejecutado: req.body.monto_Ejecutado
    };
    yield departamento_model.findByIdAndUpdate(id, {
      $set: depart
    }, {
      new: true
    });
    res.json({
      'Status': ' Departamento Actualizado'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

departamentos_controller.deleteDepartamento = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield departamento_model.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Departamento Eliminado'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = departamentos_controller; //Para exportar mi objeto y asi agregar multiples metodos