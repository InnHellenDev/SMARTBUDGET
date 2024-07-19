import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departamentomodel } from '../../models/departamentomodel';
import { DepartamentoservicService } from '../../services/departamentoservic.service';

declare var M: any;

@Component({
  selector: 'app-departamentocomp',
  templateUrl: './departamentocomp.component.html',
  styleUrls: ['./departamentocomp.component.css']
})
export class DepartamentocompComponent implements OnInit {

  constructor(public depaServ: DepartamentoservicService) { }

  ngOnInit(): void {
    this.getAllDepartamentos();  
  }
  AddDepartamento(form: NgForm){
    if(form.value._id){
      this.depaServ.putDepartamento(form.value).subscribe (res=> {
        this.limpiarForm(form);
        this.getAllDepartamentos();
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.depaServ.postDepartamento(form.value).subscribe(res => {this.getAllDepartamentos();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}

getAllDepartamentos(){
  this.depaServ.getDepartamento()
  .subscribe(res=> {
    this.depaServ.DepartArray = res as Departamentomodel[];
  });
}

editDepartamento(editarDepartamento: Departamentomodel){
  this.depaServ.selectedDepart = editarDepartamento;
}

deleteDepartamento(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar el Departamento?')) {
    this.depaServ.deleteDepartamento(_id)
    .subscribe (res => {
      this.getAllDepartamentos();
      this.limpiarForm(form);
      M.toast({html: 'Departamento Eliminado'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.depaServ.selectedDepart = new Departamentomodel(); 
    }
  }
}
