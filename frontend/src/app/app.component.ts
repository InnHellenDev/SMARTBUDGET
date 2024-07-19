import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public esIniciarSesion : boolean;
  errorMessage = "";

  constructor() {}
 
  cambiarEstadoSesion() {
    localStorage.removeItem('esIniciarSesion');
    this.esIniciarSesion = true;
  }

  ngOnInit(): void {
    
    //console.log(this.esIniciarSesion);
    this.esIniciarSesion = JSON.parse(localStorage.getItem("esIniciarSesion"));


    if (this.esIniciarSesion == true || this.esIniciarSesion == undefined){
      this.esIniciarSesion = true;
      localStorage.removeItem('esIniciarSesion');
      localStorage.setItem('esIniciarSesion', JSON.stringify(true));

    } else{
      this.esIniciarSesion = JSON.parse(localStorage.getItem("esIniciarSesion"));
    }
  

    // Obtiene los datos enviados desde el componente de listar
    
    console.log(localStorage);
    

  }

}
