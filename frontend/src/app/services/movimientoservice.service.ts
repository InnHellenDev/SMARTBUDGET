import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimientomodel } from '../models/movimientomodel';


@Injectable({
  providedIn: 'root'
})
export class MovimientoserviceService {

  selectedMovimiento: Movimientomodel;
  movimientoArray: Movimientomodel[];

  readonly URL_API ='http://localhost:3000/smartbudget/movimiento';

  constructor(private http: HttpClient) { 
    //this.selectedMovimiento= new Movimientomodel();
  }
  getMovimiento(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postMovimiento(EnviarMovimiento: Movimientomodel){
    return this.http.post(this.URL_API,EnviarMovimiento);
  }

  putMovimiento (ActualizarMovimiento: Movimientomodel){
    return this.http.put(this.URL_API + `/${ActualizarMovimiento._id}`, ActualizarMovimiento);
  }
  
  deleteMovimiento(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
