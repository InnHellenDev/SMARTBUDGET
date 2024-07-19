export class Registromodel {
    constructor(_id = '', transacciones_id = '', cuenta_id= '', tipo_transaccion = 0, descripcion='', monto=0, fecha_transaccion=0, observaciones='') {
        this._id=_id;
        this.transacciones_id =transacciones_id;
        this.cuenta_id =cuenta_id;
        this.tipo_transaccion=tipo_transaccion;
        this.descripcion=descripcion;
        this.monto=monto;
        this.fecha_transaccion=fecha_transaccion;
        this.observaciones=observaciones;
     }
    //Crear un modelo de datos en la app
    _id:string;
    transacciones_id: string;
    cuenta_id: string;
    tipo_transaccion: number;
    descripcion:string;
    monto:number;
    fecha_transaccion: number;
    observaciones:string;
}
