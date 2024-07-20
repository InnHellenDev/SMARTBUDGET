"use strict";

//Diseño de las collections que van a ir adentro de mongodb
var mongoose = require('mongoose');

var {
  Schema
} = mongoose; 

var movimientoSchema = new Schema({
  idCuenta: {
    type: Number,
    require: true
  },
  tipoTransaccion: {
    type: Number,
    require: true
  },
  descripcion: {
    type: String,
    require: true
  },
  monto: {
    type: Number,
    require: true
  },
  fecha: {
    type: Number,
    require: true
  },
  categorias: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  //Para ver cuando fue actualizado o agregado el movimiento
  versionKey: false
});
module.exports = mongoose.model('movimiento_Collections', movimientoSchema);