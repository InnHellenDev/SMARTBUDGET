//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;

//var departamentos_Collections = require('../models/departamento'); 
//const departamentos_Collections = mongoose.model('departamentos_Collections');

const solicitudSchema = new Schema({
numero_Solicitud:{ type: Number, require: true},
fecha_Solicitud:{type: Date, require:true},
numero_Contratacion:{type: String, require: true},
monto_Solicitud:{ type: Number, require: true}
},{
    timestamps:true,//Para ver cuando fue actualizado o agregado el registro
    versionKey:false
});

module.exports= mongoose.model('solicitudes_Collections', solicitudSchema);