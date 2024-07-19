"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var solicitudmodel = require('../models/solicitud');

var departameto = require('../models/departamento');

var solicitud_controller = {};

solicitud_controller.getAll_Solicitudes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var solic = yield solicitudmodel.find();
    res.json(solic);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //Busca todo el presupuesto anula en la DB


solicitud_controller.createSolicitud = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var solicit = new solicitudmodel({
      numero_Solicitud: req.body.numero_Solicitud,
      fecha_Solicitud: req.body.fecha_Solicitud,
      numero_Contratacion: req.body.numero_Contratacion,
      codigo_Departamento: req.body.codigo_Departamento,
      monto_Solicitud: req.body.monto_Solicitud
    });
    yield solicit.save();
    res.json({
      'status': 'Solicitud Guardada'
    });
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

solicitud_controller.getSolicitud = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id

    /* const {id} = req.params;
     const solic = await solicitudmodel.findById(id);
     res.json(solic);//****  */

    /*const {id} = req.params;
    const solic = await (solicitudmodel.findById(id).populate('codigo_Departamento').exec (function(err, solicitudmodel){
        if (err) return handleError(err);
        console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
    };
    
     res.json(solic);*/
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

solicitud_controller.editSolicitud = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var solic = {
      numero_Solicitud: req.body.numero_Solicitud,
      fecha_Solicitud: req.body.fecha_Solicitud,
      numero_Contratacion: req.body.numero_Contratacion,
      codigo_Departamento: req.body.codigo_Departamento,
      monto_Solicitud: req.body.monto_Solicitud
    };
    yield solicitudmodel.findByIdAndUpdate(id, {
      $set: solic
    }, {
      new: true
    });
    res.json({
      'Status': ' Solicitud Actualizada'
    });
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

solicitud_controller.deleteSolicitud = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    yield solicitudmodel.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Solicitud Eliminada'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = solicitud_controller; //Para exportar mi objeto y asi agregar multiples metodos