export class PartidasModels{
    constructor(_id = '', cuenta_id = '',monto =0, intereses_ganados = 0, fecha_deposito = '##-##-####') {
        this._id=_id;
        this.cuenta_id =cuenta_id;
        this.monto=monto;
        this.intereses_ganados= intereses_ganados;
        this.fecha_deposito= fecha_deposito;
       
    }
    //Crear un modelo de datos en la app
    _id:string;
    cuenta_id: string;
    monto: number;
    intereses_ganados: number;
    fecha_deposito: string;
   
}