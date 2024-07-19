export class Actividad {
    constructor(_id = '', codigo_Actividad = 0, monto_Ejecutado = 0, fecha_Actividad='') {
        this._id=_id;
        this.codigo_Actividad=codigo_Actividad;
        this.monto_Ejecutado=monto_Ejecutado;
        this.fecha_Actividad;
     }
    //Crear un modelo de datos en la app
    _id:string;
    codigo_Actividad: number;
    monto_Ejecutado: number;
    fecha_Actividad:Date;
}
