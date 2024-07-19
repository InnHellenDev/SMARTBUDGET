export class Presupuesto {
    constructor(_id = '', codigo_Asignacion = 0, presupuesto_Anual = 0, presupuesto_Disponible = 0, presupuesto_ano= 2020) {
        this._id=_id;
        this.codigo_Asignacion= codigo_Asignacion;
        this.presupuesto_Anual = presupuesto_Anual;
        this.presupuesto_Disponible = presupuesto_Disponible;
        this.presupuesto_ano = presupuesto_ano;
        //this.periodo_Hasta= periodo_Hasta;
    }
    //Crear un modelo de datos en la app
    _id:String;
    codigo_Asignacion: number;
    presupuesto_Anual: number;
    presupuesto_Disponible: number;
    presupuesto_ano: number;
    //periodo_Hasta: any;
}
