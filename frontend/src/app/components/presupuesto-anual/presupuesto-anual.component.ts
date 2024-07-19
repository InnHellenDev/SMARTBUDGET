import { Component, OnInit } from '@angular/core';
import {PresupuestoAserviceService} from '../../services/presupuesto-aservice.service';
import { NgForm } from '@angular/forms';
import { Presupuesto } from '../../models/presupuesto';

declare var M: any;//Definicion de variable constante para usar toast de Materialize

@Component({
  selector: 'app-presupuesto-anual',
  templateUrl: './presupuesto-anual.component.html',
  styleUrls: ['./presupuesto-anual.component.css']
})
export class PresupuestoAnualComponent implements OnInit {

  constructor(public presupuestoServ: PresupuestoAserviceService) { }

  ngOnInit(): void {
    this.getAllPresupuestos();//Apenas carga la aplicación puedo ver los Presupuestos
  }

  AddPresupuesto(form: NgForm){//Recibo un formulario de tipo NgForm
    //console.log(form.value);

  
   /* this.presupuestoServ.getJson().subscribe(
      res => console.log(res),
      err => console.log(err));        
    

    this.presupuestoServ.getJson().subscribe((res: any) => {
      console.log(res);
    });*/
    //console.log(this.presupuestoServ.getJson());

    if(form.value._id ){//Si existes el _id es porque es una actualizacion. De todos los valores del formulacio selecciono el _id
      this.presupuestoServ.putPresupuesto(form.value)//Si existe el _id entonces actualizo el valor si no creo uno nuevo
      .subscribe(res=> {//subscribe para escuhar la respuesta que envia el servidor
        this.limpiarForm(form);
        this.getAllPresupuestos();
        M.toast({html:'Actualización Correcta'});
        //this.limpiarForm(form);
      });
    }else{
      this.presupuestoServ.postPresupuesto(form.value)
      .subscribe(res => {
        console.log(res)
        M.toast({html: res});
        this.getAllPresupuestos();
        M.toast({html: 'Save successfully'});
        this.limpiarForm(form);
      });
    }

        
 
    }
  getAllPresupuestos(){
    this.presupuestoServ.getPresupuestos()//Asi traigo los Presupuesto de backend
    .subscribe(res => {// subscribe es porque quiero escruchar la respuesta
      this.presupuestoServ.PresupuestoArray = res as Presupuesto[];
    });
  }

  editPresupuesto(editarFuncionarios: Presupuesto){
    this.presupuestoServ.selectedPresupuestoAnual = editarFuncionarios;
  }

  deletePresupuesto(_id:string, form: NgForm){
    if(confirm('¿Esta seguro de eliminar el Presupuesto Anual?')) {
      this.presupuestoServ.deletePresupuesto(_id)
      .subscribe (res => {
        this.getAllPresupuestos();
        this.limpiarForm(form);
        M.toast({html: 'Presupuesto Eliminado'});
      });
    }
  }

  limpiarForm(form: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    //if (form) {
      form.reset();
      this.getAllPresupuestos();
   //}
  }
}
