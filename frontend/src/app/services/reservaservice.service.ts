import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservamodel } from '../models/reservamodel';


@Injectable({
  providedIn: 'root'
})
export class ReservaserviceService {

  selectedReserva: Reservamodel;
  ReservArray: Reservamodel[];

  readonly URL_API ='http://localhost:3000/smartbudget/reservas';

  constructor(private http: HttpClient) {
    this.selectedReserva= new Reservamodel();
  }
  getReserva(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postReserva(EnviarReserva: Reservamodel){
    return this.http.post(this.URL_API,EnviarReserva);
  }

  putReserva(ActualizarReserva: Reservamodel){
    return this.http.put(this.URL_API + `/${ActualizarReserva._id}`, ActualizarReserva);
  }
  
  deleteReserva(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
