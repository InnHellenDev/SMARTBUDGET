import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registromodel } from '../../models/registromodel';
import { RegistroserviceService } from '../../services/registroservice.service';

declare var M: any;

@Component({
  selector: 'app-registrocomp',
  templateUrl: './registrocomp.component.html',
  styleUrls: ['./registrocomp.component.css']
})
export class RegistrocompComponent implements OnInit {

  constructor(public registroServ: RegistroserviceService) { }

  ngOnInit(): void {
    this.getAllRegistros();
  }
  
  AddRegistro(form: NgForm){
    if(form.value._id){
      this.registroServ.putRegistro(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllRegistros();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.registroServ.postRegistro(form.value).subscribe(res => {this.getAllRegistros();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}
getAllRegistros(){
  this.registroServ.getRegistro()
  .subscribe(res=> {
    this.registroServ.registroArray = res as Registromodel[];
  });
}

editRegistro(editarRegistro: Registromodel){
  this.registroServ.selectedRegistro = editarRegistro;
}

deleteRegistro(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar el Registro?')) {
    this.registroServ.deleteRegistro(_id)
    .subscribe (res => {
      this.getAllRegistros();
      this.limpiarForm(form);
      M.toast({html: 'Registro Eliminado'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.registroServ.selectedRegistro = new Registromodel(); 
      this.getAllRegistros();
    }
  }
}
