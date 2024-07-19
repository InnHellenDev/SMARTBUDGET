const partidas2504_model = require ('../models/partidas2504_model');
const Presupuesto_A = require('../models/presupuesto_Anual_model');
const partidas2504_controller = {};//Definicion de un objeto llamado controlador de Presupuesto Anual


partidas2504_controller.getAll_Partidas2504 =async(req, res, next) => {
    const part_2504 = await partidas2504_model.find();//linea buena
    /*const part_2504 = partidas2504_model.find({}, function(err,partidas2504_controller){
        presupuesto_Anual_model.populate(partidas2504_controller,{path:"presupuesto_Anual"}, function(err,partidas2504_controller){
            res.status(200).send(partidas2504_controller);
        });
    });*/

    res.json(part_2504);//linea buena
};

partidas2504_controller.createPartidas2504 = async (req, res, next) => { //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
  
    const buscarCodAsig = req.body.codigo_Asignacion;
    const codPart = req.body.codigo_Partida;
    //console.log("buscarCodPre: " + buscarCodPre);
    const presupuestoModel = await Presupuesto_A.findOne({codigo_Asignacion: buscarCodAsig});
    //console.log("presupuestoModel: " + presupuestoModel);
    if(presupuestoModel){
            const GuardadoPartidas = await partidas2504_model.findOne({codigo_Partida: codPart});
            if(!GuardadoPartidas){

                    if(req. body.monto_Asignado <= presupuestoModel.presupuesto_Disponible){

                            const part_2504 = new partidas2504_model({
                                codigo_Asignacion: req.body.codigo_Asignacion,//VERIFICAR SI ESE CODIGO ASIGNACIÓN EXISTE
                                codigo_Partida:req.body.codigo_Partida,
                                nombre_Partida: req.body.nombre_Partida,
                                monto_Asignado: req. body.monto_Asignado,
                                monto_Disponible: req.body.monto_Disponible      
                            });
                                presupuestoModel.presupuesto_Disponible = await (presupuestoModel.presupuesto_Disponible - part_2504.monto_Asignado);
                                await presupuestoModel.save();
                                res.send(" El nuevo presupuesto anual es de: " + presupuestoModel.presupuesto_Disponible);
                                await part_2504.save();
                    }else{
                        res.json({'status': 'No hay suficiente presupuesto disponible'}); 
                    }                            
            }else{
                res.json({'status': 'Codigo Partida Duplicado'}); 
            }                
    }else{
        res.json({'status': 'Codigo Presupuestario No existe'}); 
    }                             
}
partidas2504_controller.getPartida2504 = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const part_2504 = await partidas2504_model.findById(id);
    res.json(part_2504);
};

partidas2504_controller.editPartidas2504 = async (req, res, next) => {
    const {id} = req.params;
    const buscarCodigo= req.body.codigo_Asignacion;
    const part_2504 = {
        codigo_Asignacion: req.body.codigo_Asignacion,
        codigo_Partida:req.body.codigo_Partida,
        nombre_Partida: req.body.nombre_Partida,
        monto_Asignado: req. body.monto_Asignado,
        monto_Disponible: req.body.monto_Disponible      
    };
  
    const guardadoPart_2504 = await partidas2504_model.findById(id);
    const presupuestoModel = await Presupuesto_A.findOne({codigo_Asignacion: buscarCodigo});
    
      if(part_2504.monto_Asignado <= guardadoPart_2504.monto_Asignado){
        const resultado= (guardadoPart_2504.monto_Asignado-part_2504.monto_Asignado);
       
        presupuestoModel.presupuesto_Disponible = await (presupuestoModel.presupuesto_Disponible + resultado);
        await presupuestoModel.save();
        await partidas2504_model.findByIdAndUpdate(id, {$set: part_2504}, {new: true});
        res.json({'Status': ' Partida Actualizada'});
    }
    else
    {
        if(part_2504.monto_Asignado > guardadoPart_2504.monto_Asignado){
                if(part_2504.monto_Asignado <= (presupuestoModel.monto_Disponible+ guardadoPart_2504.monto_Asignado)){
                presupuestoModel.presupuesto_Disponible = await (presupuestoModel.presupuesto_Disponible + guardadoPart_2504.monto_Asignado);
                presupuestoModel.presupuesto_Disponible = await (presupuestoModel.presupuesto_Disponible - part_2504.monto_Asignado);
                await presupuestoModel.save();
                //console.log(" presupuestoModel.presupuesto_Disponible: " + presupuestoModel.presupuesto_Disponible);
                await partidas2504_model.findByIdAndUpdate(id, {$set: part_2504}, {new: true});
                res.json({'Status': ' Partida Actualizada'});

            }
            else
            {
                res.json({'Status': ' No hay presupuesto suficente para realizar la modificación'});
            }
        }
    }
   
};
partidas2504_controller.deletePartida2504 = async (req, res, next) => {
 
    const guardadoPart_2504 = await partidas2504_model.findById(req.params.id);
    const buscarCodAsig= guardadoPart_2504.codigo_Asignacion;
    const presupuestoModel = await Presupuesto_A.findOne({codigo_Asignacion: buscarCodAsig});//Va buscar en el modelo Presupuesto Anual donde el codigo de asignacion sea 2020 ejem
    
    if(guardadoPart_2504.monto_Disponible>0){
        presupuestoModel.presupuesto_Disponible= await presupuestoModel.presupuesto_Disponible + guardadoPart_2504.monto_Disponible; 
        await presupuestoModel.save();
        res.json({'Status': 'El nuevo presupuesto Disponible es:' + presupuestoModel.presupuesto_Disponible});
    }
    await partidas2504_model.findByIdAndRemove(req.params.id);
    //res.json({'Status': 'Partida Eliminada'});
};
module.exports = partidas2504_controller; //Para exportar mi objeto y asi agregar multiples metodos