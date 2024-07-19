"use strict";

//Diseño de las collections que van a ir adentro de mongodb
var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var departamentosSchema = new Schema({
  codigo_Departamento: {
    type: Number,
    require: true,
    unique: true
  },
  nombre_Departamento: {
    type: String,
    require: true
  },
  monto_Ejecutado: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  //Cada vez que agrego o actualizo un dato a mi collections puedo ver cuando fue agregado
  versionKey: false //Quita la fila que se guarda en el objeto de __v

});
module.exports = mongoose.model('departamentos_Collections', departamentosSchema);