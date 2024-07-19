/*  
//Diseño los datos que van a ir adentro de mongodb
const mongoose = require('mongoose');//Esto es para requerir mongoose para definir los schemas
const {Schema} = mongoose;

const funcionarioSchema = new Schema({//CREO UN NUEVO SCHEMA Y MODELO MIS DATOS
    cedula:{ type: Number, required: true, unique:true, trim:true },
    nombre:{ type: String, required: true, uppercase: true },
    puesto:{ type:String, required: true},//uppercase: true, enum:['JEFATURA','ANALISTA','TECNICO','ASISTENTE', 'ENFERMERA','MEDICO'] },
    departamento:{ type: String, required: true}// uppercase: true, enum:['CGI','RRHH','PRESUPUESTO','GBS', 'HOSPITAL','CONSULTA EXTERNA']}ti
/*},{

    timestamps: true,//esta propiedad puedo ver cuando fue actualizado por ultima vez
    versionKey: false// para que cuando se crea un objeto no guarde en la bd un campo__V
});

module.exports = mongoose.model('funcionario2504',funcionarioSchema);//funcionario2504 es el nombre con el se guarda en la bd con su esquema funcionarisSchema


const partidas2504Schema = new Schema({
    codigo_Partida:{ type: Number, require: true, unique: true},
    nombre_Partida:{type: String, require: true},
    monto_Asignado:{ type: Number, require: true},
    monto_Disponible:{type: Number, require: true}
    });
    
    module.exports= mongoose.model('partidas2504_Collections', partidas2504Schema);

    const presupuesto_AnualSchema = new Schema({
        codigo_Asignacion:{ type: String, require: true, unique: true},
        presupuesto_Anual:{ type: Number, require: true},
        presupuesto_Disponible:{type: Number, require: true},
        periodo_Desde:{type: Date, require: true},
        periodo_Hasta:{type: Date, require: true}
        });
        
        module.exports= mongoose.model('presupuesto_Anual_Collections', presupuesto_AnualSchema);
        */
"use strict";