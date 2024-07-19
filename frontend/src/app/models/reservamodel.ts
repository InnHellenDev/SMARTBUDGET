export class Reservamodel {
    constructor(_id = '', cuenta_id= '', usuario_id = '', tipo_cuenta='' , saldo = 0, fecha_apertura = '##-##-####', detalle = '') {
        this._id=_id;
        this.cuenta_id =cuenta_id;
        this.usuario_id =usuario_id;
        this.tipo_cuenta= tipo_cuenta;
        this.saldo=saldo;
        this.fecha_apertura=fecha_apertura;
        this.detalle=detalle;
     }
    //Crear un modelo de datos en la app
    _id:string;
    cuenta_id: string;
    usuario_id: string;
    tipo_cuenta: string;
    saldo: number;
    fecha_apertura: string;
    detalle: string;
}

