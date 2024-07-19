//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
const actividad_model = require ('../models/actividad');
const actividad_controller = {};//Definicion de un objeto llamado controlador de Presupuesto Anual


actividad_controller.getAll_Actividad = async(req, res, next) => {
    const activ = await actividad_model.find();//Busca todo el presupuesto anula en la DB
    res.json(activ);
};

actividad_controller.createActividad = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    const activ = new actividad_model({
        codigo_Actividad:req.body.codigo_Actividad,
        monto_Ejecutado: req.body.monto_Ejecutado,
        fecha_Actividad: req.body.fecha_Actividad
    });

    await activ.save();
    res.json({'status': 'Actividad Guardada'}); 

        
};
//Esyoy usando funcion flecha
const restar_Presupuesto = (num1, num2) =>{
    
    return resultado;
};

actividad_controller.getActividad = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const activ = await actividad_model.findById(id);
    res.json(activ);
};

actividad_controller.editActividad = async (req, res, next) => {
    const {id} = req.params;
    const activ = {
        codigo_Actividad:req.body.codigo_Actividad,
        monto_Ejecutado: req.body.monto_Ejecutado,
        fecha_Actividad: req.body.fecha_Actividad
        
    };
    await actividad_model.findByIdAndUpdate(id, {$set: activ}, {new: true});
    res.json({'Status': ' Actividad Actualizada'});
};

actividad_controller.deleteActividad = async (req, res, next) => {
    await actividad_model.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Actividad Eliminada'});
};

module.exports = actividad_controller; //Para exportar mi objeto y asi agregar multiples metodos