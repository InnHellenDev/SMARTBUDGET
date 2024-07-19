//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
const presupuesto_AnualModel = require ('../models/presupuesto_Anual_model');
const partidas_Model = require('../models/partidas2504_model');
const presupuesto_AnualController = {};//Definicion de un objeto llamado controlador de Presupuesto Anual

presupuesto_AnualController.getAll_Presupuesto_Anual = async(req, res, next) => {
    const presup_Anual = await presupuesto_AnualModel.find();//Busca todo el presupuesto anula en la DB
    res.json(presup_Anual);
};

presupuesto_AnualController.createPresupuesto_Anual = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body

    const idExiste= req.body.codigo_Asignacion;
    const presup_AnualExiste = await presupuesto_AnualModel.findOne({codigo_Asignacion: idExiste});

    if(!presup_AnualExiste){
        const presup_Anual = new presupuesto_AnualModel({
            codigo_Asignacion:req.body.codigo_Asignacion,
            presupuesto_Anual: req.body.presupuesto_Anual,
            presupuesto_Disponible: req. body.presupuesto_Disponible,
            presupuesto_ano: req.body.presupuesto_ano
            //periodo_Desde: req.body.periodo_Desde,
            //periodo_Hasta: req.body.periodo_Hasta
        });
        await presup_Anual.save();
        res.json({'status': 'Presupuesto Guardado'});

    }else{
        res.json({'status': 'Codigo Duplicado'});       
    }

    
};

presupuesto_AnualController.getPresupuesto_Anual = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const presup_Anual = await presupuesto_AnualModel.findById(id);
    res.json(presup_Anual);
};

presupuesto_AnualController.editPresupuesto_Anual = async (req, res, next) => {
    const {id} = req.params;
    const presup_Anual = {
        codigo_Asignacion:req.body.codigo_Asignacion,
        presupuesto_Anual: req.body.presupuesto_Anual,
        presupuesto_Disponible: req. body.presupuesto_Disponible,
        presupuesto_ano: req.body.presupuesto_ano
        //periodo_Desde: req.body.periodo_Desde,
        //periodo_Hasta: req.body.periodo_Hasta
    };
    await presupuesto_AnualModel.findByIdAndUpdate(id, {$set: presup_Anual}, {new: true});
    res.json({'Status': ' Presupuesto Anual Actualizado'});
};

presupuesto_AnualController.deletePresupuesto_Anual = async (req, res, next) => {
   
    const presM = await presupuesto_AnualModel.findById(req.params.id);
    const partidModel = await partidas_Model.findOne({codigo_Asignacion: presM.codigo_Asignacion});
    
    if(!partidModel){
    await presupuesto_AnualModel.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Presupuesto Anual Eliminado'});
    }else{
        res.json({'Status': 'Presupuesto ligado a Partidas'});
    }
}

module.exports = presupuesto_AnualController; //Para exportar mi objeto y asi agregar multiples metodos