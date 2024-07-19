//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
const departamento_model = require ('../models/departamento');
const departamentos_controller = {};//Definicion de un objeto llamado controlador de Servicio


departamentos_controller.getAll_Departamentos = async(req, res, next) => {
    const depart = await departamento_model.find();//Busca todo el Servicio anula en la DB
    res.json(depart);
};

departamentos_controller.createDepartamento = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    const depart = new departamento_model({
        codigo_Departamento:req.body.codigo_Departamento,
        nombre_Departamento: req.body.nombre_Departamento,
        monto_Ejecutado: req. body.monto_Ejecutado
    });
    await depart.save();
    res.json({'status': 'Departamento Guardado'});      
};

departamentos_controller.getDepartamento = async (req, res, next) => {
    const {id} = req.params;
    const depart = await departamento_model.findById(id);
    res.json(depart);
};

departamentos_controller.editDepartamento = async (req, res, next) => {
    const {id} = req.params;
    const depart = {
        codigo_Departamento:req.body.codigo_Departamento,
        nombre_Departamento: req.body.nombre_Departamento,
        monto_Ejecutado: req. body.monto_Ejecutado    
    };
    await departamento_model.findByIdAndUpdate(id, {$set: depart}, {new: true});
    res.json({'Status': ' Departamento Actualizado'});
};

departamentos_controller.deleteDepartamento = async (req, res, next) => {
    await departamento_model.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Departamento Eliminado'});
};

module.exports = departamentos_controller; //Para exportar mi objeto y asi agregar multiples metodos