export class Funcionario {//CLASE DE TS
//Constructor para iniciarlizar los valores
    constructor(_id = '', cedula = 0, nombre = '', puesto = '', departamento = '') {
        this._id=_id;
        this.cedula= cedula;
        this.nombre = nombre;
        this.puesto = puesto;
        this.departamento = departamento;
    }
    //Crear un modelo de datos en la app
    _id:string;
    cedula: number;
    nombre: string;
    puesto: string;
    departamento: string;
}
