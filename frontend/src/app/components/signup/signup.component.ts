import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUp } from '../../models/signUp';
import { SignUpService } from '../../services/sign-up.service';

declare var M:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public SignUpSer: SignUpService) { }

  ngOnInit(): void {
    this.getAllSignUp();
  }

  AddSignUp(form: NgForm){
    if(form.value._id){
      this.SignUpSer.putSignUp(form.value).subscribe (res=> { 
        this.limpiarForm(form);
        this.getAllSignUp();
        
        M.toast({html:'Actualización Correcta'});
      });

    }else{
      this.SignUpSer.postSignUp(form.value).subscribe(res => {
      this.getAllSignUp();
      M.toast({html:'Guardado Satisfactoriamente'});
      this.limpiarForm(form);
    }); 
  }
}

getAllSignUp(){
  this.SignUpSer.getSignUp()
  .subscribe(res=> {
    this.SignUpSer.SignUpArray = res as SignUp[];
  });
}

editSignUp(editarSignUp: SignUp){
  this.SignUpSer.selectedSignUp = editarSignUp;
}

deleteSignUp(_id:string, form: NgForm){
  if(confirm('Esta seguro de eliminar el usuario?')) {
    this.SignUpSer.deleteSignUp(_id)
    .subscribe (res => {
      this.getAllSignUp();
      this.limpiarForm(form);
      M.toast({html: 'Usuario Eliminada'});
    });
  }
}
  limpiarForm(form?: NgForm){// Para recibir un form por parametros si el form existe entonces que lo reset
    if (form) {
      form.reset();
      this.SignUpSer.selectedSignUp = new SignUp(); 
    }
  }


}
