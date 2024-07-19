import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservamodel } from '../../models/reservamodel';
import { ReservaserviceService } from '../../services/reservaservice.service';

declare var M:any;

@Component({
  selector: 'app-reservacomp',
  templateUrl: './reservacomp.component.html',
  styleUrls: ['./reservacomp.component.css']
})
export class ReservacompComponent implements OnInit {

  constructor(public reservaSe: ReservaserviceService) { }

  ngOnInit(): void {
    this.getAllReservas();
  }
  AddReserva(form: NgForm){
    if(form.value._id){
      this.reservaSe.putReserva(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllReservas();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.reservaSe.postReserva(form.value).subscribe(res => {this.getAllReservas();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}
getAllReservas(){
  this.reservaSe.getReserva()
  .subscribe(res=> {
    this.reservaSe.ReservArray = res as Reservamodel[];
  });
}

editReserva(editarReserva: Reservamodel){
  this.reservaSe.selectedReserva = editarReserva;
}

deleteReserva(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar la Reserva?')) {
    this.reservaSe.deleteReserva(_id)
    .subscribe (res => {
      this.getAllReservas();
      this.limpiarForm(form);
      M.toast({html: 'Reserva Eliminada'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      //this.reservaSe.selectedReserva = new Reservamodel(); 
      this.getAllReservas();
    }
  }
}
