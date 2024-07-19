export class Solicitudmodel {
    constructor(_id = '', numero_Solicitud = 0, fecha_Solicitud= '', numero_Contratacion='', monto_Solicitud=0 ) {
        this._id=_id;
        this.numero_Solicitud=numero_Solicitud;
        this.fecha_Solicitud;
        this.numero_Contratacion=numero_Contratacion;
        this.monto_Solicitud=monto_Solicitud;
     }
    //Crear un modelo de datos en la app
    _id:string;
    numero_Solicitud: number;
    fecha_Solicitud:Date;
    numero_Contratacion: string;
    monto_Solicitud:number;
}