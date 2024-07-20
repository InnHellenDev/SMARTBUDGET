import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movimientomodel } from '../../models/movimientomodel';
import { MovimientoserviceService } from '../../services/movimientoservice.service';

declare var M: any;

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  constructor(public movimientoServ: MovimientoserviceService) { }

  ngOnInit(): void {
    this.getAllMovimientos();
  }
  
  AddMovimiento(form: NgForm){
    if(form.value._id){
      this.movimientoServ.putMovimiento(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllMovimientos();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.movimientoServ.postMovimiento(form.value).subscribe(res => {this.getAllMovimientos();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}
getAllMovimientos(){
  this.movimientoServ.getMovimiento()
  .subscribe(res=> {
    this.movimientoServ.movimientoArray = res as Movimientomodel[];

  });
}

editMovimiento(editarMovimiento: Movimientomodel){
  this.movimientoServ.selectedMovimiento = editarMovimiento;
}

deleteMovimiento(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar el Movimiento?')) {
    this.movimientoServ.deleteMovimiento(_id)
    .subscribe (res => {
      this.getAllMovimientos();
      this.limpiarForm(form);
      M.toast({html: 'Movimiento Eliminado'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      //this.movimientoServ.selectedMovimiento = new Movimientomodel(); 
      this.getAllMovimientos();
    }
  }
}
