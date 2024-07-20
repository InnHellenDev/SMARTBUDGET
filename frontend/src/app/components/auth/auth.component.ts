import { Component, ErrorHandler, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AuthService} from '../../services/auth.service';
import {Auth} from '../../models/auth';

import {ActivatedRoute} from '@angular/router';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';



 
declare var M: any;// Variable para usar el toas de materialize

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage="";
  constructor(public AuthSer: AuthService) { }

  ngOnInit(): void {
  }
  AddAuth(form: NgForm){
    
      this.AuthSer.postAuth(form.value).subscribe(res =>  {
        M.toast({html:'Ingreso Correcto'});
        //console.log('error es http status: ' + this._httperror.statusText);
      });
       
            /*
            console.log("status es : " + status + "res es: "+ res );
        this.activateRoute.url.subscribe(url=> console.log('el url es: '+ url));
        this.activateRoute.params.subscribe(params => console.log(' params es : ' + params));
        this._httpHeaderResponse.statusText.toString();
        console.log('this._httpHeaderResponse.statusText es: '+ this._httpHeaderResponse.statusText);
            */
      //status(401);
        //res.status(401).json;
      
   // }
    //else
    //{
    // if(status.toString()== "Unauthorized"){
     // M.toast({html:'Verifique sus datos'});
    
   // }
  } 
 /* errorHandler(error: HttpErrorResponse){
    console.log('error es: ' + error.statusText);
    return observableThrowError(error.message);
   }*/
   
}

