const registromodel= require('../models/registro');
const registro_controller={};

registro_controller.getAll_Registros = async(req, res, next) => {
    const regis = await registromodel.find();//Busca todo el presupuesto anula en la DB
    res.json(regis);
};

registro_controller.createRegistro = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    const regist = new registromodel({
        numero_Solicitud:req.body.numero_Solicitud,
        orden_Compra:req.body.orden_Compra,
        codigo_Actividad: req.body.codigo_Actividad,
        codigo_Departamento: req.body.codigo_Departamento,
        codigo_Partida: req.body.codigo_Partida,
        codigo_Reserva: req.body.codigo_Reserva,
        monto: req. body.monto,
        observaciones: req.body.observaciones
    });

    await regist.save();
    res.json({'status': 'Solicitud Guardada'});      
};

registro_controller.getRegistro = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const regist = await registromodel.findById(id);
    res.json(regist);
};

registro_controller.editRegistro = async (req, res, next) => {
    const {id} = req.params;
    const regist = {
        numero_Solicitud:req.body.numero_Solicitud,
        orden_Compra:req.body.orden_Compra,
        codigo_Actividad: req.body.codigo_Actividad,
        codigo_Departamento: req.body.codigo_Departamento,
        codigo_Partida: req.body.codigo_Partida,
        codigo_Reserva: req.body.codigo_Reserva,
        monto: req. body.monto,
        observaciones: req.body.observaciones    
    };
    await registromodel.findByIdAndUpdate(id, {$set: regist}, {new: true});
    res.json({'Status': ' Registro Actualizado'});
};

registro_controller.deleteRegistro = async (req, res, next) => {
    await registromodel.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Registro Eliminado'});
};

module.exports = registro_controller; //Para exportar mi objeto y asi agregar multiples metodos