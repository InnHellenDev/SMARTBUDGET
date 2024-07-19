import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp} from '../models/signUp';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  
  selectedSignUp: SignUp;
  SignUpArray: SignUp[];

  readonly URL_API ='http://localhost:3000/presupuesto2504/auth/signup?';
  
  constructor(private http: HttpClient) { }
  getSignUp(){
    return this.http.get(this.URL_API);
  }
  postSignUp(EnviarSignUp: SignUp){
    return this.http.post(this.URL_API, EnviarSignUp);
  }
  putSignUp(ActualizarSignUp: SignUp){
    return this.http.put(this.URL_API + `/${ActualizarSignUp._id}`, ActualizarSignUp);
  }
  deleteSignUp(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
