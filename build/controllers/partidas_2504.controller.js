"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
//import Presupuesto_A from "../models/presupuesto_Anual_model";
var {
  db
} = require('../models/partidas2504_model');

var partidas2504_model = require('../models/partidas2504_model');

var Presupuesto_A = require('../models/presupuesto_Anual_model');

var partidas2504_controller = {}; //Definicion de un objeto llamado controlador de Presupuesto Anual
//const presupuesto_Ctler = {};

partidas2504_controller.getAll_Partidas2504 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var part_2504 = yield partidas2504_model.find(); //linea buena

    /*const part_2504 = partidas2504_model.find({}, function(err,partidas2504_controller){
        presupuesto_Anual_model.populate(partidas2504_controller,{path:"presupuesto_Anual"}, function(err,partidas2504_controller){
            res.status(200).send(partidas2504_controller);
        });
    });*/

    res.json(part_2504); //linea buena
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

partidas2504_controller.createPartidas2504 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var presupuestoModel = yield Presupuesto_A.findOne(req.id); //Esto sirve porque solo hay un presupuesto ---

    if (presupuestoModel.codigo_Asignacion == req.body.codigo_Asignacion) {
      if (req.body.monto_Asignado <= presupuestoModel.presupuesto_Disponible) {
        var part_2504 = new partidas2504_model({
          codigo_Asignacion: req.body.codigo_Asignacion,
          //VERIFICAR SI ESE CODIGO ASIGNACIÓN EXISTE
          codigo_Partida: req.body.codigo_Partida,
          nombre_Partida: req.body.nombre_Partida,
          monto_Asignado: req.body.monto_Asignado,
          monto_Disponible: req.body.monto_Disponible
        });
        presupuestoModel.presupuesto_Disponible = yield presupuestoModel.presupuesto_Disponible - part_2504.monto_Asignado;
        yield presupuestoModel.save();
        res.send(" El nuevo presupuesto anual es de: " + presupuestoModel.presupuesto_Disponible);
        yield part_2504.save();
      } else {
        res.json({
          'status': 'No hay suficiente presupuesto disponible'
        });
      }
    } else {
      res.json({
        'status': 'El codigo Presupuestario No existe'
      });
    }
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

partidas2504_controller.getPartida2504 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    //OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    var {
      id
    } = req.params;
    var part_2504 = yield partidas2504_model.findById(id);
    res.json(part_2504);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

partidas2504_controller.editPartidas2504 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var part_2504 = {
      codigo_Asignacion: req.body.codigo_Asignacion,
      codigo_Partida: req.body.codigo_Partida,
      nombre_Partida: req.body.nombre_Partida,
      monto_Asignado: req.body.monto_Asignado,
      monto_Disponible: req.body.monto_Disponible
    };
    var guardadoPart_2504 = yield partidas2504_model.findById(id);
    var presupuestoModel = yield Presupuesto_A.findOne(req.codigo_Asignacion); //Esto sirve porque solo hay un presupuesto ---

    if (part_2504.monto_Asignado <= guardadoPart_2504.monto_Asignado) {
      var resultado = guardadoPart_2504.monto_Asignado - part_2504.monto_Asignado;
      presupuestoModel.presupuesto_Disponible = yield presupuestoModel.presupuesto_Disponible + resultado;
      yield presupuestoModel.save();
      yield partidas2504_model.findByIdAndUpdate(id, {
        $set: part_2504
      }, {
        new: true
      });
      res.json({
        'Status': ' Partida Actualizada'
      });
    } else {
      if (part_2504.monto_Asignado > guardadoPart_2504.monto_Asignado) {
        if (part_2504.monto_Asignado <= presupuestoModel.monto_Disponible + guardadoPart_2504.monto_Asignado) {
          presupuestoModel.presupuesto_Disponible = yield presupuestoModel.presupuesto_Disponible + guardadoPart_2504.monto_Asignado;
          presupuestoModel.presupuesto_Disponible = yield presupuestoModel.presupuesto_Disponible - part_2504.monto_Asignado;
          yield presupuestoModel.save(); //console.log(" presupuestoModel.presupuesto_Disponible: " + presupuestoModel.presupuesto_Disponible);

          yield partidas2504_model.findByIdAndUpdate(id, {
            $set: part_2504
          }, {
            new: true
          });
          res.json({
            'Status': ' Partida Actualizada'
          });
        } else {
          res.json({
            'Status': ' No hay presupuesto suficente para realizar la modificación'
          });
        }
      }
    }
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

partidas2504_controller.deletePartida2504 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    var presupuestoModel = yield Presupuesto_A.findOne(req.codigo_Asignacion);
    var guardadoPart_2504 = yield partidas2504_model.findOne(req.monto_Disponible);

    if (guardadoPart_2504.monto_Disponible > 0) {
      presupuestoModel.presupuesto_Disponible = (yield presupuestoModel.presupuesto_Disponible) + guardadoPart_2504.monto_Disponible;
      yield presupuestoModel.save();
      res.json({
        'Status': 'El nuevo presupuesto Disponible es:' + presupuestoModel.presupuesto_Disponible
      });
    }

    yield partidas2504_model.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Partida Eliminada'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = partidas2504_controller; //Para exportar mi objeto y asi agregar multiples metodos