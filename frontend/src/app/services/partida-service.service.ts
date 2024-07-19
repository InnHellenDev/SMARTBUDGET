import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // Este modulo me permite importar funcionalidad desde angular y así comunicar mi app al backend
import { PartidasModels } from '../models/partidas';

@Injectable({
  providedIn: 'root'
})
export class PartidaServiceService {

  selectedPartidas: PartidasModels; //Esto me permitira seleccionar una partida
  PartidasArray: PartidasModels[];//Arreglo de partidas para almacenarlos en el array
 
  readonly URL_API ='http://localhost:3000/presupuesto2504/partidas_2504'; //readonly para almacenar mi propiedad
    
  constructor(private http: HttpClient) { 
    this.selectedPartidas = new PartidasModels(); 
  }
  
  getPartida(){//http es forma de hacer la consulta al backend // esto es una funcion que puede llamar desde otros lugares
    return this.http.get(this.URL_API);
   } 

  postPartida(EnviarPartida: PartidasModels){
    return this.http.post(this.URL_API,EnviarPartida);
  }

  putPartida (ActualizarPartida: PartidasModels){
    return this.http.put(this.URL_API + `/${ActualizarPartida._id}`, ActualizarPartida);
  }
  
  deletePartida(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  getJson(){
    return this.http.get(this.URL_API);//Para leer el json
  }

}
