import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // Este modulo me permite importar funcionalidad desde angular y así comunicar mi app al backend
import { Funcionario } from '../models/funcionario';


@Injectable({
  providedIn: 'root'
})
//Este servicio permite obtener mis datos desde el backend y posteriormente reutilizarlos en cualquier parte de la app
//Este servicioFuncionarios se encargar de guardar, editar actualizar los datos al servidor- crud- que reutilizaré
export class FuncionarioserviceService {

  selectedFuncionario: Funcionario; //Esto me permitira seleccionar un funcionario
  funcionarioArray: Funcionario[];//Arreglo de empleados para almacenarlos en el array

  readonly URL_API ='http://localhost:3000/api/allfuncionarios'; //readonly para almacenar mi propiedad

  constructor(private http: HttpClient) {
   this.selectedFuncionario = new Funcionario();  // Estoy dando un funcionario por defecto
   }

   getFuncionarios(){//http es forma de hacer la consulta al backend
    return this.http.get(this.URL_API);
   } 

  postFuncionario(EnviarFuncionario: Funcionario){
    return this.http.post(this.URL_API,EnviarFuncionario);
  }

  putFuncionario (ActualizarFuncionario: Funcionario){
    return this.http.put(this.URL_API + `/${ActualizarFuncionario._id}`, ActualizarFuncionario);
  }
  
  deleteFuncionario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
