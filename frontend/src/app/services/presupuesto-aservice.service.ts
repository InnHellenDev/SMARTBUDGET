import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Este modulo me permite importar funcionalidad desde angular y así comunicar mi app al backend
import { Presupuesto } from './../models/presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoAserviceService {

  selectedPresupuestoAnual: Presupuesto; //Esto me permitira seleccionar un presupuesto
  PresupuestoArray: Presupuesto[];//Arreglo de presupuesto para almacenarlos en el array

  readonly URL_API ='http://localhost:3000/smartbudget/presupuesto_Anual'; //readonly para almacenar mi propiedad
  

  constructor(private http: HttpClient) {
   this.selectedPresupuestoAnual = new Presupuesto();
   }

   getPresupuestos(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postPresupuesto(EnviarPresupuesto: Presupuesto){
    return this.http.post(this.URL_API,EnviarPresupuesto);
  }

  putPresupuesto (ActualizarPresupuesto: Presupuesto){
    return this.http.put(this.URL_API + `/${ActualizarPresupuesto._id}`, ActualizarPresupuesto);
  }
  
  deletePresupuesto(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  /*getJson(){
    return this.http.get(this.URL_API);//Para leer el json
    //return this.http.request;
  }*/

}
