//Diseño de las collections que van a ir adentro de mongodb
const mongoose = require('mongoose');
const {Schema}=mongoose;

const actividadSchema = new Schema({
codigo_Actividad:{ type: Number, require: true, unique: true},
monto_Ejecutado:{ type: Number, require: true},
fecha_Actividad:{type: Date}
},{
    timestamps:true,
    versionKey:false
});

module.exports= mongoose.model('actividad_Collections', actividadSchema);
