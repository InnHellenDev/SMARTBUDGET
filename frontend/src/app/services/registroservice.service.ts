import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registromodel } from '../models/registromodel';


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  selectedRegistro: Registromodel;
  registroArray: Registromodel[];

  readonly URL_API ='http://localhost:3000/presupuesto2504/registro';

  constructor(private http: HttpClient) { 
    this.selectedRegistro= new Registromodel();
  }
  getRegistro(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postRegistro(EnviarRegistro: Registromodel){
    return this.http.post(this.URL_API,EnviarRegistro);
  }

  putRegistro (ActualizarRegistro: Registromodel){
    return this.http.put(this.URL_API + `/${ActualizarRegistro._id}`, ActualizarRegistro);
  }
  
  deleteRegistro(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
