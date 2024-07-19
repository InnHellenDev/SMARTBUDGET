import { Component, OnInit } from '@angular/core';

import {FuncionarioserviceService} from '../../services/funcionarioservice.service';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../../models/funcionario';

import { Router, ActivatedRoute } from "@angular/router";

declare var M: any;//Definicion de variable constante para usar toast de Materialize

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
  providers: [FuncionarioserviceService]
})
export class FuncionariosComponent implements OnInit {

  constructor(
    public funcionarioServ: FuncionarioserviceService,
    private _router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllFuncionarios();//Apenas carga la aplicación puedo ver los funcionarios
  }

  cambiarEstadoSesion() {
    localStorage.removeItem('esIniciarSesion');
    localStorage.setItem('esIniciarSesion', JSON.stringify(true));
    this._router.navigate(["/home"], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  } 

  AddFuncionario(form: NgForm){//Recibo un formulario de tipo NgForm
    //console.log(form.value);
    if(form.value._id){//Si existes el _id es porque es una actualizacion. De todos los valores del formulacio selecciono el _id
      this.funcionarioServ.putFuncionario(form.value)//Si existe el _id entonces actualizo el valor si no creo uno nuevo
      .subscribe(res=> {//subscribe para escuhar la respuesta que envia el servidor
        this.limpiarForm(form);
        this.getAllFuncionarios();
        M.toast({html:'Actualización Correcta'});
      });
    }else{
      this.funcionarioServ.postFuncionario(form.value)
      .subscribe(res => {
        this.getAllFuncionarios();
        M.toast({html: 'Save successfully'});
        this.limpiarForm(form);
      });
    }
  }
  getAllFuncionarios(){
    this.funcionarioServ.getFuncionarios()//Asi traigo los funcionarios de backend
    .subscribe(res => {// subscribe es porque quiero escruchar la respuesta
      this.funcionarioServ.funcionarioArray = res as Funcionario[];
    });
  }

  editFuncionarios(editarFuncionarios: Funcionario){
    this.funcionarioServ.selectedFuncionario = editarFuncionarios;
  }

  deleteFuncionarios(_id:string, form: NgForm){
    if(confirm('Esta seguro de eliminar el Funcionario?')) {
      this.funcionarioServ.deleteFuncionario(_id)
      .subscribe (res => {
        this.getAllFuncionarios();
        this.limpiarForm(form);
        M.toast({html: 'Funcionario Eliminado'});
      });
    }
  }

  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.funcionarioServ.selectedFuncionario = new Funcionario();
    }
  }
}
