const solicitudmodel = require('../models/solicitud');
const actividadModel = require('../models/actividad');
const  registroM = require('../models/registro');
const reservaModel = require('../models/reservas');
const solicitud_controller = {};

solicitud_controller.getAll_Solicitudes = async(req, res, next) => {
    const solic = await solicitudmodel.find();
    res.json(solic);   
};//Busca todo el presupuesto anula en la DB
    
solicitud_controller.createSolicitud = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    const codReg = req.body.numero_Solicitud;
    //const codReserv = 
    
    const registroExiste = await registroM.findOne({numero_Solicitud: codReg});
    //console.log(" registroExiste: " + registroExiste + " monto es: " + registroExiste.monto);

    
    if(!registroExiste){
        res.json({'status': 'Solicitud No existe'}); 
        
    }else{      

            const solicit = new solicitudmodel({
                numero_Solicitud:req.body.numero_Solicitud,
                fecha_Solicitud:req.body.fecha_Solicitud,
                numero_Contratacion:req.body.numero_Contratacion,
                monto_Solicitud: req. body.monto_Solicitud 
            });
                     
                const SaveActi = new actividadModel({
                    codigo_Actividad:registroExiste.codigo_Actividad,
                    monto_Ejecutado: registroExiste.monto,
                    fecha_Actividad: solicit.fecha_Solicitud
                });

                await SaveActi.save();
                await solicit.save();
                res.json({'status': 'Solicitud Guardada'});  

                
                const reservaCodigo = await reservaModel.findOne({codigo_Reserva: registroExiste.codigo_Reserva});
                reservaCodigo.monto_Disponible=(reservaCodigo.monto_Disponible-solicit.monto_Solicitud);
                await reservaCodigo.save();
    } 
};

solicitud_controller.getSolicitud = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
   /* const {id} = req.params;
    const solic = await solicitudmodel.findById(id);
    res.json(solic);//****  */
    
    /*const {id} = req.params;
    const solic = await (solicitudmodel.findById(id).populate('codigo_Departamento').exec (function(err, solicitudmodel){
        if (err) return handleError(err);
        console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  };
    
     res.json(solic);*/
};

solicitud_controller.editSolicitud = async (req, res, next) => {
    const {id} = req.params;
    const solic = {
        numero_Solicitud:req.body.numero_Solicitud,
        fecha_Solicitud:req.body.fecha_Solicitud,
        numero_Contratacion:req.body.numero_Contratacion,
        monto_Solicitud: req. body.monto_Solicitud      
    };
    await solicitudmodel.findByIdAndUpdate(id, {$set: solic}, {new: true});
    res.json({'Status': ' Solicitud Actualizada'});
};

solicitud_controller.deleteSolicitud = async (req, res, next) => {
    await solicitudmodel.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Solicitud Eliminada'});
};

module.exports = solicitud_controller; //Para exportar mi objeto y asi agregar multiples metodos