"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//CON EL CONTROLADOR DEFINO LOS METODOS Y LUEGOS LOS PUEDO REUTILIZAR EN MIS RUTAS
var FuncionarioModels = require('../models/funcionario'); //Esta es una manera de hacerle consulta la bd ya que tiene el modelo de datos -- requiriendola


var funcionarioCotrl = {}; //Definicion de un objeto llamado Controlador de Funcionario

funcionarioCotrl.getAllFuncionarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var funcionarios = yield FuncionarioModels.find(); //Busque todos los empleados de la BD

    res.json(funcionarios);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

funcionarioCotrl.createFuncionario = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next-- ejecuta el siguiente midelweres que se encuentre//los datos me los envian a travez de una propiedad llamada body
    var funcionario = new FuncionarioModels({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      puesto: req.body.puesto,
      departamento: req.body.departamento
    });
    yield funcionario.save();
    res.json({
      'status': 'Funcionario ha sido Guardado'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

funcionarioCotrl.getFuncionario = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var funcionario = yield FuncionarioModels.findById(id);
    res.json(funcionario);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

funcionarioCotrl.editFuncionario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var funcionario = {
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      puesto: req.body.puesto,
      departamento: req.body.departamento
    };
    yield FuncionarioModels.findByIdAndUpdate(id, {
      $set: funcionario
    }, {
      new: true
    });
    res.json({
      'Status': 'Funcionario Actualizado'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

funcionarioCotrl.deleteFuncionario = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield FuncionarioModels.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Funcionario Eliminado'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = funcionarioCotrl; //Para Exportar mi objeto y asi agregar multiples metodos--como obtener-agregar-actualizar-delete funcionarios