"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
var reserva_model = require('../models/reservas');

var partidas_Model = require('../models/partidas2504_model');

var reserva_controller = {}; //Definicion de un objeto llamado controlador de Presupuesto Anual

reserva_controller.getAll_Reservas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var reserv = yield reserva_model.find(); //Busca todo el presupuesto anula en la DB

    res.json(reserv);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

reserva_controller.createReserva = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    var partidasModel = yield partidas_Model.findOne(req.id); //Esto sirve porque solo hay un presupuesto ---

    if (partidasModel.codigo_Partida == req.body.codigo_Partida) {
      if (req.body.monto_Asignado <= partidasModel.monto_Disponible) {
        var reserv = new reserva_model({
          codigo_Partida: req.body.codigo_Partida,
          codigo_Reserva: req.body.codigo_Reserva,
          monto_Asignado: req.body.monto_Asignado,
          monto_Disponible: req.body.monto_Disponible,
          detalle_Reserva: req.body.detalle_Reserva
        });
        partidasModel.monto_Disponible = yield partidasModel.monto_Disponible - reserv.monto_Asignado;
        yield partidasModel.save();
        res.send(" El nuevo monto en la partida es de: " + partidasModel.monto_Disponible);
        yield reserv.save();
      } else {
        res.json({
          'status': 'La partida no tiene suficiente saldo'
        });
      }
    } else {
      res.json({
        'status': 'La Partida No existe'
      });
    }
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

reserva_controller.getReserva = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    //OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    var {
      id
    } = req.params;
    var reserv = yield reserva_model.findById(id);
    res.json(reserv);
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

reserva_controller.editReserva = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var {
      id
    } = req.params;
    var reserv = {
      codigo_Partida: req.body.codigo_Partida,
      codigo_Reserva: req.body.codigo_Reserva,
      monto_Asignado: req.body.monto_Asignado,
      monto_Disponible: req.body.monto_Disponible,
      detalle_Reserva: req.body.detalle_Reserva
    };
    var guardadoReserva = yield reserva_model.findById(id);
    var partidaModel = yield partidas_Model.findOne(req.codigo_Partida); //Esto sirve porque solo hay un presupuesto ---

    if (reserv.monto_Asignado <= guardadoReserva.monto_Asignado) {
      var resultado = guardadoReserva.monto_Asignado - reserv.monto_Asignado; //RESTA= 50<80= 80-50=30

      partidaModel.monto_Disponible = yield partidaModel.monto_Disponible + resultado;
      yield partidaModel.save();
      yield reserva_model.findByIdAndUpdate(id, {
        $set: reserv
      }, {
        new: true
      });
      res.json({
        'Status': ' Reserva Actualizada'
      });
    } else {
      if (reserv.monto_Asignado > guardadoReserva.monto_Asignado) {
        if (reserv.monto_Asignado <= partidaModel.monto_Disponible + guardadoReserva.monto_Asignado) {
          partidaModel.monto_Disponible = yield partidaModel.monto_Disponible + guardadoReserva.monto_Asignado;
          partidaModel.monto_Disponible = yield partidaModel.monto_Disponible - reserv.monto_Asignado;
          yield partidaModel.save(); //console.log(" presupuestoModel.presupuesto_Disponible: " + presupuestoModel.presupuesto_Disponible);

          yield reserva_model.findByIdAndUpdate(id, {
            $set: reserv
          }, {
            new: true
          });
          res.json({
            'Status': ' Reserva Actualizada'
          });
        } else {
          res.json({
            'Status': 'No hay sufiente dinero en la Partida'
          });
        }
      }
    }
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

reserva_controller.deleteReserva = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    var partidaModel = yield partidas_Model.findOne(req.codigo_Partida);
    var guardadoReserva = yield reserva_model.findOne(req.monto_Disponible);

    if (guardadoReserva.monto_Disponible > 0) {
      partidaModel.monto_Disponible = (yield partidaModel.monto_Disponible) + guardadoReserva.monto_Disponible;
      yield partidaModel.save();
      res.json({
        'Status': 'El nuevo saldo Disponible en la partida es:' + partidaModel.monto_Disponible
      });
    }

    yield reserva_model.findByIdAndRemove(req.params.id);
    res.json({
      'Status': 'Reserva Eliminada'
    });
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = reserva_controller; //Para exportar mi objeto y asi agregar multiples metodos