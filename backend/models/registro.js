//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;

//var departamentos_Collections = mongoose.model('departamentos_Collections');

const registroSchema = new Schema({
numero_Solicitud:{ type: Number, require: true},
orden_Compra:{ type: Number, require: true},
codigo_Actividad:{ type: Number, require: true},
codigo_Departamento:{type: Number, require: true, unique: false},
codigo_Partida:{ type: Number, require: true},
codigo_Reserva:{ type: Number, require: true},
monto:{ type: Number, require: true},
observaciones:{type: String, require: true}
},{
    timestamps:true,//Para ver cuando fue actualizado o agregado el registro
    versionKey:false
});

module.exports= mongoose.model('registro_Collections', registroSchema);