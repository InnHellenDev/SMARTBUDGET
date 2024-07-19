import {RouterModule,Routes}from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { PresupuestoAnualComponent} from './components/presupuesto-anual/presupuesto-anual.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { ReservacompComponent } from './components/reservacomp/reservacomp.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { DepartamentocompComponent } from './components/departamentocomp/departamentocomp.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudcompComponent } from './components/solicitudcomp/solicitudcomp.component';
import { RegistrocompComponent } from './components/registrocomp/registrocomp.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { Component } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { InformesComponent } from './components/informes/informes.component';
import { EducacionFinancieraComponent } from './components/educacion-financiera/educacion-financiera.component';




const APP_ROUTES: Routes = [
    {path:'loguin', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'presupuestoAnual', component: PresupuestoAnualComponent},
    {path:'partidas', component: PartidasComponent},
    {path:'reservas', component: ReservacompComponent},
    {path:'actividad', component: ActividadComponent},
    {path:'departamento', component: DepartamentocompComponent},
    {path:'solicitud', component: SolicitudcompComponent},
    {path:'registro', component: RegistrocompComponent},
    {path:'signin', component:AuthComponent},
    {path:'signup', component: SignupComponent},
    {path:'funcionarios', component: FuncionariosComponent},
    {path:'informes', component: InformesComponent},
    {path:'educacionFinanciera', component: EducacionFinancieraComponent},
    {path:'SiginComponete', component: SigninComponent},

    {path:'**', pathMatch:'full', redirectTo: 'home'}
];
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});//PARA enviar documentos por parametros para sea mas eficiente.
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

