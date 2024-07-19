import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitudmodel } from '../../models/solicitudmodel';
import { SolicitudserviceService } from '../../services/solicitudservice.service';

declare var M:any;

@Component({
  selector: 'app-solicitudcomp',
  templateUrl: './solicitudcomp.component.html',
  styleUrls: ['./solicitudcomp.component.css']
})
export class SolicitudcompComponent implements OnInit {

  constructor(public solicitudServ: SolicitudserviceService) { }

  ngOnInit(): void {
    this.getAllSolicitudes();
  }
  AddSolicitud(form: NgForm){
    if(form.value._id){
      this.solicitudServ.putSolicitud(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllSolicitudes();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.solicitudServ.postSolicitud(form.value).subscribe(res => {this.getAllSolicitudes();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}
getAllSolicitudes(){
  this.solicitudServ.getSolicitud()
  .subscribe(res=> {
    this.solicitudServ.solicitudArray = res as Solicitudmodel[];
  });
}

editSolicitud(editarSolicitud: Solicitudmodel){
  this.solicitudServ.selectedSolicitud = editarSolicitud;
}

deleteSolicitud(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar la Solicitud?')) {
    this.solicitudServ.deleteSolicitud(_id)
    .subscribe (res => {
      this.getAllSolicitudes();
      this.limpiarForm(form);
      M.toast({html: 'Solicitud Eliminada'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.solicitudServ.selectedSolicitud = new Solicitudmodel(); 
    }
  }
}
