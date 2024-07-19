"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
var actividad_model = require('../models/actividad');

var actividad_controller = {}; //Definicion de un objeto llamado controlador de Presupuesto Anual

actividad_controller.getAll_Actividad = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var activ = yield actividad_model.find(); //Busca todo el presupuesto anula en la DB

    res.json(activ);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

actividad_controller.createActividad = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var activ = new actividad_model({
      codigo_Actividad: req.body.codigo_Actividad,
      nombre_Actividad: req.body.nombre_Actividad,
      monto_Ejecutado: req.body.monto_Ejecutado
    });
    yield activ.save();
    res.json({
      'status': 'Actividad Guardada'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); //Esyoy usando funcion flecha


var restar_Presupuesto = (num1, num2) => {
  return resultado;
};

actividad_controller.getActividad = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    //OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    var {
      id
    } = req.params;
    var activ = yield actividad_model.findById(id);
    res.json(activ);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

actividad_controller.editActividad = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var activ = {
      codigo_Actividad: req.body.codigo_Actividad,
      nombre_Actividad: req.body.nombre_Actividad,
      monto_Ejecutado: req.body.monto_Ejecutado
    };
    yield actividad_model.findByIdAndUpdate(id, {
      $set: activ
    }, {
      new: true
    });
    res.json({
      'Status': ' Actividad Actualizada'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

actividad_controller.deleteActividad = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield actividad_model.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Actividad Eliminada'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = actividad_controller; //Para exportar mi objeto y asi agregar multiples metodos