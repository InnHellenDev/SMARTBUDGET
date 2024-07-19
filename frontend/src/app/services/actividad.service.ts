import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  selectedActividad: Actividad;
  actividadArray: Actividad[];

  readonly URL_API = 'http://localhost:3000/presupuesto2504/actividad';

  constructor(private http: HttpClient) {
    this.selectedActividad= new Actividad();
   }
   getActividad(){
     return this.http.get(this.URL_API);
   }
   postActividad(EnviarActividad: Actividad){
     return this.http.post(this.URL_API, EnviarActividad);
   }
   putActividad(ActualizarActividad: Actividad){
     return this.http.put(this.URL_API + `/${ActualizarActividad._id}`, ActualizarActividad);
   }
   deleteActividad(_id:string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
