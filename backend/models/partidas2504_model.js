//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;
//const presupuesto_Anual_Collections = mongoose.model('presupuesto_Anual_Collections');

const partidas2504Schema = new Schema({
    codigo_Asignacion:{ type: Number, require: true, unique: false},
    codigo_Partida:{ type: Number, require: true, unique: true},
    nombre_Partida:{type: String, require: true},
    monto_Asignado:{ type: Number, require: true},
    monto_Disponible:{type: Number, require: true},
   // partidas: [{ type: Schema.Types.ObjectId, ref: 'presupuesto_Anual_Collections' }]
   
    },{
        timestamps:true,//Para ver cuando fue actualizado o agregado el registro
        versionKey:false
    });

module.exports= mongoose.model('partidas2504_Collections', partidas2504Schema);
