import { Component, OnInit } from '@angular/core';
import {PartidaServiceService} from '../../services/partida-service.service';
import { NgForm } from '@angular/forms';
import { PartidasModels } from '../../models/partidas';

declare var M: any;//Definicion de variable constante para usar toast de Materialize

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

  constructor(public PartidaServ: PartidaServiceService) { }

  ngOnInit(): void {
    this.getAllPartidas();//Apenas carga la aplicación puedo ver las partidas
  }

  AddPartida(form: NgForm){//Recibo un formulario de tipo NgForm //Si existes el _id es porque es una actualizacion. De todos los valores del formulacio selecciono el _id //Si existe el _id entonces actualizo el valor si no creo uno nuevo 
      M.toast({html:'CUANTAS VECES?'});
    if(form.value._id){
      M.toast({html:'NO ENTRAAA'});
      this.PartidaServ.postPartida(form.value).subscribe(res => { 
      });
    }

    this.PartidaServ.getJson().subscribe((res: any) => {
      console.log(res);
    });
  }


  getAllPartidas(){
    this.PartidaServ.getPartida()//Asi traigo los Presupuesto de backend
    .subscribe(res => {// subscribe es porque quiero escruchar la respuesta
      this.PartidaServ.PartidasArray = res as PartidasModels[];
    });
  }

  editPartida(editarFuncionarios: PartidasModels){
    this.PartidaServ.selectedPartidas = editarFuncionarios;
  }

  deletePartida(_id:string, form: NgForm){
    if(confirm('¿Esta seguro de eliminar Partida?')) {// Si la respuesta es true
      this.PartidaServ.deletePartida(_id)
      .subscribe (res => {
        this.getAllPartidas();
        //this.limpiarForm(form);
        M.toast({html: 'Partida Eliminada'});
        this.limpiarForm(form);
      });
    }
  }

  limpiarForm(form: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    //if (form) {
      form.reset();
      this.getAllPartidas();
   //}
  }
}
