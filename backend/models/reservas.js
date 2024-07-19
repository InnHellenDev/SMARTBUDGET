//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;

const reservasSchema = new Schema({
codigo_Partida:{ type: Number, require: true, unique: false},
codigo_Reserva:{ type: Number, require: true, unique: true},
monto_Asignado: { type: Number, require: true},
monto_Disponible:{ type: Number, require: true},
detalle_Reserva:{type: String}
},{
    timestamps:true,//Para ver cuando fue actualizado o agregado el registro
    versionKey:false
});

module.exports= mongoose.model('reservas_Collections', reservasSchema);
