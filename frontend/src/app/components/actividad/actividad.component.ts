import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';
import {Actividad} from '../../models/actividad';

declare var M: any;// Variable para usar el toas de materialize

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  constructor(public actividadSer: ActividadService) { }

  ngOnInit(): void {
    this.getAllActividades();
  }

  AddActividad(form: NgForm){
    if(form.value._id){
      this.actividadSer.putActividad(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllActividades();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.actividadSer.postActividad(form.value).subscribe(res => {this.getAllActividades();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}

getAllActividades(){
  this.actividadSer.getActividad()
  .subscribe(res=> {
    this.actividadSer.actividadArray = res as Actividad[];
  });
}

editActividad(editarActividad: Actividad){
  this.actividadSer.selectedActividad = editarActividad;
}

deleteActividad(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar la actividad?')) {
    this.actividadSer.deleteActividad(_id)
    .subscribe (res => {
      this.getAllActividades();
      this.limpiarForm(form);
      M.toast({html: 'Actividad Eliminada'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.actividadSer.selectedActividad = new Actividad(); 
    }
  }

}
