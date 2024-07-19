import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Routes
import {APP_ROUTING} from './app.routes';

//Components

import { AppComponent } from './app.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { PresupuestoAnualComponent } from './components/presupuesto-anual/presupuesto-anual.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ReservacompComponent } from './components/reservacomp/reservacomp.component';
import { DepartamentocompComponent } from './components/departamentocomp/departamentocomp.component';
import { SolicitudcompComponent } from './components/solicitudcomp/solicitudcomp.component';
import { RegistrocompComponent } from './components/registrocomp/registrocomp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { InformesComponent } from './components/informes/informes.component';
import { EducacionFinancieraComponent } from './components/educacion-financiera/educacion-financiera.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts'; // Módulo de gráficos


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    PresupuestoAnualComponent,
    PartidasComponent,
    ActividadComponent,
    ReservacompComponent,
    DepartamentocompComponent,
    SolicitudcompComponent,
    RegistrocompComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    InformesComponent,
    EducacionFinancieraComponent,
    //NgxChartsModule
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
