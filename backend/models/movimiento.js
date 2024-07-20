//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;

//var departamentos_Collections = mongoose.model('departamentos_Collections');

const movimientoSchema = new Schema({
idCuenta:{ type: Number, require: true},
tipoTransaccion:{ type: Number, require: true},
descripcion:{ type: Number, require: true},
monto:{type: Number, require: true, unique: false},
fecha:{ type: Number, require: true},
categorias:{type: String, require: true}
},{
    timestamps:true,//Para ver cuando fue actualizado o agregado el movimiento
    versionKey:false
});

module.exports= mongoose.model('movimiento_Collections', movimientoSchema);