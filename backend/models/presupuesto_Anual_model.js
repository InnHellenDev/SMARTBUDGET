const mongoose = require('mongoose');
const {Schema}=mongoose;

const presupuesto_AnualSchema = new Schema({
    codigo_Asignacion:{ type: Number, require: true, unique: true},
    presupuesto_Anual:{ type: Number, require: true},
    presupuesto_Disponible:{type: Number, require: true},
    presupuesto_ano:{type: Number, require: true}
    //periodo_Desde:{type: Date, require: true},
    //periodo_Hasta:{type: Date, require: true},
    //partidas: [{ type: Schema.Types.ObjectId, ref: 'partidas2504_Collections' }]
},{
    timestamps:true,
    versionKey:false
});

module.exports= mongoose.model('presupuesto_Anual_Collections', presupuesto_AnualSchema);