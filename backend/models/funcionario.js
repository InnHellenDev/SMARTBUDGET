//Diseño los datos que van a ir adentro de mongodb
const mongoose = require('mongoose');//Esto es para requerir mongoose para definir los schemas
const {Schema} = mongoose;

const funcionarioSchema = new Schema({//CREO UN NUEVO SCHEMA Y MODELO MIS DATOS
    cedula:{ type: Number, required: true, unique:true, trim:true },
    nombre:{ type: String, required: true, uppercase: true },
    puesto:{ type:String, required: true},//uppercase: true, enum:['JEFATURA','ANALISTA','TECNICO','ASISTENTE', 'ENFERMERA','MEDICO'] },
    departamento:{ type: String, required: true}// uppercase: true, enum:['CGI','RRHH','PRESUPUESTO','GBS', 'HOSPITAL','CONSULTA EXTERNA']}
    
},{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model('funcionario2504',funcionarioSchema);//funcionario2504 es el nombre con el se guarda en la bd con su esquema funcionarisSchema

