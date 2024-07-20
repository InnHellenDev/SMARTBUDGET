const movimientomodel= require('../models/movimiento');
const movimiento_controller={};

movimiento_controller.getAll_Movimiento = async(req, res, next) => {
    try {
        const movim = await movimientomodel.find();
        res.json(movim);
        console.log("INGRESÓ A MOVIMIENTOS_CONTROLLER: getAll_Movimiento");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los movimientos');
    }
};

movimiento_controller.createMovimiento = async (req, res, next) => {
    //next -- ejecuta el siguiente midelware que se encuentre// Los datos me los envía a travex de una propiedad llamada body
    const movimi= new movimientomodel({
        idCuenta: req.body.idCuenta,
        tipoTransaccion: req.body.tipoTransaccion,
        descripcion: req.body.descripcion,
        monto: req.body.monto,
        fecha: req.body.fecha,
        monto: req.body.monto,
        categorias: req.body.categorias
    });

    await movimi.save();
    res.json({'status': 'Solicitud Guardada'});      
};

movimiento_controller.getMovimiento = async (req, res, next) => {//OJO VER SI FUNCIONA SI NO CAMBIAR codigo_Asignacion por id
    const {id} = req.params;
    const movimi= await movimientomodel.findById(id);
    res.json(movimi);
};

movimiento_controller.editMovimiento = async (req, res, next) => {
    const {id} = req.params;
    const movimi= {
        idCuenta: req.body.idCuenta,
        tipoTransaccion: req.body.tipoTransaccion,
        descripcion: req.body.descripcion,
        monto: req.body.monto,
        fecha: req.body.fecha,
        monto: req.body.monto,
        categorias: req.body.categorias   
    };
    await movimientomodel.findByIdAndUpdate(id, {$set: movimi}, {new: true});
    res.json({'Status': ' Movimiento Actualizado'});
};

movimiento_controller.deleteMovimiento = async (req, res, next) => {
    await movimientomodel.findByIdAndRemove (req.params.id);
    res.json({'Status': 'Movimiento Eliminado'});
};

module.exports = movimiento_controller; //Para exportar mi objeto y asi agregar multiples metodos