export class Departamentomodel {
    constructor(_id = '', codigo_Departamento = 0, nombre_Departamento = '#####', monto_Ejecutado = 0) {
        this._id=_id;
        this.codigo_Departamento=codigo_Departamento;
        this.nombre_Departamento=nombre_Departamento;
        this.monto_Ejecutado=monto_Ejecutado;
     }
    //Crear un modelo de datos en la app
    _id:string;
    codigo_Departamento: number;
    nombre_Departamento: string;
    monto_Ejecutado: number;
}
