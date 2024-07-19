//Con el controlador defino los métodos y luego los puedo reutilizar en mis rutas
import reserva_model from "../models/reservas";
import partidas_Model from "../models/partidas2504_model";
const reserva_controller = {};//Definicion de un objeto llamado controlador de Presupuesto Anual


reserva_controller.getAll_Reservas = async(req, res, next) => {
    const reserv = await reserva_model.find();//Busca todo el presupuesto anula en la DB
    res.json(reserv);
};

reserva_controller.createReserva = async (req, res, next) => {//next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    
    const codP = req.body.codigo_Partida;
    
    const partidaExiste = await partidas_Model.findOne({codigo_Partida: codP});
    //console.log(" partidaExiste: " + partidaExiste);

    if(!partidaExiste){
        res.json({'status': 'La Partida No existe'}); 
        
    }else{ 
        if(req.body.monto_Asignado <= partidaExiste.monto_Disponible){

            const reserv = new reserva_model({
                codigo_Partida: req.body.codigo_Partida,
                codigo_Reserva:req.body.codigo_Reserva,
                monto_Asignado: req. body.monto_Asignado,
                monto_Disponible: req. body.monto_Disponible,
                detalle_Reserva: req.body.detalle_Reserva
            });

            partidaExiste.monto_Disponible = await (partidaExiste.monto_Disponible - reserv.monto_Asignado);
            await partidaExiste.save();
            res.send(" El nuevo monto en la partida es de: " + partidaExiste.monto_Disponible);
                
            await reserv.save();
                
        }else{
            res.json({'status': 'La partida no tiene suficiente saldo'}); 
        }

    } 
};

reserva_controller.getReserva = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const reserv = await reserva_model.findById(id);
    res.json(reserv);
};

reserva_controller.editReserva = async (req, res, next) => {
    const {id} = req.params;
    const codP = req.body.codigo_Partida;
    
    const reserv = {
        codigo_Partida: req.body.codigo_Partida,
        codigo_Reserva:req.body.codigo_Reserva,
        monto_Asignado: req. body.monto_Asignado,
        monto_Disponible: req. body.monto_Disponible,
        detalle_Reserva: req.body.detalle_Reserva    
    };
    const guardadoReserva = await reserva_model.findById(id);
    const partidaModel = await partidas_Model.findOne({codigo_Partida: codP});
    
      if(reserv.monto_Asignado <= guardadoReserva.monto_Asignado){
        const resultado= (guardadoReserva.monto_Asignado - reserv.monto_Asignado);//RESTA= 50<80= 80-50=30
       
        partidaModel.monto_Disponible = await (partidaModel.monto_Disponible + resultado);
        await partidaModel.save();
        await reserva_model.findByIdAndUpdate(id, {$set: reserv}, {new: true});
        res.json({'Status': ' Reserva Actualizada'});
    }
    else
    {
        if(reserv.monto_Asignado > guardadoReserva.monto_Asignado){
            if(reserv.monto_Asignado <= (partidaModel.monto_Disponible+ guardadoReserva.monto_Asignado)){
                partidaModel.monto_Disponible = await (partidaModel.monto_Disponible + guardadoReserva.monto_Asignado);
                partidaModel.monto_Disponible = await ( partidaModel.monto_Disponible - reserv.monto_Asignado);
                await partidaModel.save();
                //console.log(" presupuestoModel.presupuesto_Disponible: " + presupuestoModel.presupuesto_Disponible);
                await reserva_model.findByIdAndUpdate(id, {$set: reserv}, {new: true});
                res.json({'Status': ' Reserva Actualizada'});
            }
            else{
                res. json({'Status': 'No hay sufiente dinero en la Partida'});
            } 
           
        }
    }

};

reserva_controller.deleteReserva = async (req, res, next) => {
    //const idP = req.params.id;
   /* const {id} = req.params;
    //const buscarCodPartida = partidas_Model;
    console.log("id: " + id );

    const guardadoReserva = await reserva_model.findById(id);
    const codigoPa = buscarCodPartida.codigo_Partida;
    const partidaModel = await partidas_Model.findOne({codigo_Partida: codigoPa});
    console.log("guardadoReserva : " + partidaModel.codigo_Partida );
        
    
    if(guardadoReserva.monto_Disponible>0){
        partidaModel.monto_Disponible= await partidaModel.monto_Disponible + guardadoReserva.monto_Disponible; 
        await partidaModel.save();
        res.json({'Status': 'El nuevo saldo Disponible en la partida es:' + partidaModel.monto_Disponible});
    }*/

    await reserva_model.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Reserva Eliminada'});
};

module.exports = reserva_controller; //Para exportar mi objeto y asi agregar multiples metodos