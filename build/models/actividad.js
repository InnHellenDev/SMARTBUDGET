"use strict";

//Diseño de las collections que van a ir adentro de mongodb
var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var actividadSchema = new Schema({
  codigo_Actividad: {
    type: Number,
    require: true,
    unique: true
  },
  nombre_Actividad: {
    type: String,
    require: true
  },
  monto_Ejecutado: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model('actividad_Collections', actividadSchema);