import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentomodel } from '../models/departamentomodel';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoservicService {

  selectedDepart: Departamentomodel;
  DepartArray: Departamentomodel[];

  readonly URL_API = 'http://localhost:3000/smartbudget/departamento';

  constructor(private http: HttpClient) {
    this.selectedDepart= new Departamentomodel();
   }
   getDepartamento(){
    return this.http.get(this.URL_API);
  }
  postDepartamento(EnviarDepartamento: Departamentomodel){
    return this.http.post(this.URL_API, EnviarDepartamento);
  }
  putDepartamento(ActualizarDepartamento: Departamentomodel){
    return this.http.put(this.URL_API + `/${ActualizarDepartamento._id}`, ActualizarDepartamento);
  }
  deleteDepartamento(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
