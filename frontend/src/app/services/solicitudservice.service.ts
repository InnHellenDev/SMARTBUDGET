import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitudmodel } from '../models/solicitudmodel';

@Injectable({
  providedIn: 'root'
})
export class SolicitudserviceService {

  selectedSolicitud: Solicitudmodel;
  solicitudArray: Solicitudmodel[];

  readonly URL_API ='http://localhost:3000/presupuesto2504/solicitud';

  constructor(private http: HttpClient) { 
    this.selectedSolicitud= new Solicitudmodel();
  }

  getSolicitud(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postSolicitud(EnviarSolicitud: Solicitudmodel){
    return this.http.post(this.URL_API,EnviarSolicitud);
  }

  putSolicitud(ActualizarSolicitud: Solicitudmodel){
    return this.http.put(this.URL_API + `/${ActualizarSolicitud._id}`, ActualizarSolicitud);
  }
  
  deleteSolicitud(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
