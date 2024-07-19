//CON EL CONTROLADOR DEFINO LOS METODOS Y LUEGOS LOS PUEDO REUTILIZAR EN MIS RUTAS
const FuncionarioModels = require('../models/funcionario');//Esta es una manera de hacerle consulta la bd ya que tiene el modelo de datos -- requiriendola
const funcionarioCotrl = {}; //Definicion de un objeto llamado Controlador de Funcionario

funcionarioCotrl.getAllFuncionarios = async(req, res, next) => {
    const funcionarios = await FuncionarioModels.find() //Busque todos los empleados de la BD
    res.json(funcionarios);
};

funcionarioCotrl.createFuncionario = async (req,res, next) => {
//next-- ejecuta el siguiente midelweres que se encuentre//los datos me los envian a travez de una propiedad llamada body
const funcionario = new FuncionarioModels({
    cedula:req.body.cedula,
    nombre:req.body.nombre,
    puesto:req.body.puesto,
    departamento:req.body.departamento
    });
await funcionario.save();
res.json({
    'status': 'Funcionario ha sido Guardado'});
};

funcionarioCotrl.getFuncionario = async (req, res, next) => {
    const {id}  = req.params;
    const funcionario = await FuncionarioModels.findById(id);
    res.json(funcionario);
};

funcionarioCotrl.editFuncionario = async(req, res, next) => {
    const {id} = req.params;
    const funcionario = {
        cedula:req.body.cedula,
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        departamento: req.body.departamento
    };
    await FuncionarioModels.findByIdAndUpdate(id, {$set: funcionario},{new: true});

    res.json({ 'Status': 'Funcionario Actualizado' });

};

funcionarioCotrl.deleteFuncionario = async(req, res, next) => {
   await FuncionarioModels.findByIdAndRemove(req.params.id);
   res.json({'Status': 'Funcionario Eliminado'});
};

module.exports = funcionarioCotrl;//Para Exportar mi objeto y asi agregar multiples metodos--como obtener-agregar-actualizar-delete funcionarios