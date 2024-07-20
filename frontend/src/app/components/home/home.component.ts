import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //public esIniciarSesion1 = false;
  errorMessage = "";

  constructor(
    public AuthSer: AuthService,
    private _router: Router,
    private route: ActivatedRoute,
  
  ) {}
 //Rediccionar de forma temporal mientras se habilita la bd.
  public RedireccionarTemporal(){
    
    localStorage.removeItem('esIniciarSesion');
   // this.esIniciarSesion = false;

    localStorage.setItem('esIniciarSesion', JSON.stringify(false));
    console.log(localStorage);
      // Navegar a la página de presupuesto anual
      //this._router.navigate(["/DESARROLLO/presupuesto-2504/frontend/src/app/app.component.html"], { relativeTo: this.route });
      this._router.navigate(["/movimiento"], { relativeTo: this.route }).then(() => {
        window.location.reload();
      });

  }

  public AddAuth(form: NgForm) {

  

    this.AuthSer.postAuth(form.value).subscribe(res => {
      
    //  console.log(form.value);
     
      //M.toast({html:'Ingreso Correcto'});
      //console.log('error es http status: ' + this._httperror.statusText);
    });
    //this.esIniciarSesion = true;
   // localStorage.removeItem('esIniciarSesion');

   // localStorage.setItem('esIniciarSesion', JSON.stringify(this.esIniciarSesion));
    //console.log(localStorage);
      // Navegar a la página de presupuesto anual
     // this._router.navigate(["/DESARROLLO/presupuesto-2504/frontend/src/app/app.component.html"], { relativeTo: this.route });
     // presupuesto-2504/frontend/src/app/app.component.ts
    //todo habilitar los demás componentes cuente ingrese aqúi.
    
   //TODO PARA EJECUTAR EL CLIENTE : [root@59a625e7af5a frontend]# ng serve 
   //TODO PARA EJECUTAR EL SERVER: [root@59a625e7af5a presupuesto-2504]# npm start
  //Navegar a la página de presupuesto
   




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

  //Componente que inicia la app.
  ngOnInit(): void {
  }

}

