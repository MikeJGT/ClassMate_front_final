import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardAlumnoComponent } from './components/profesor/card-alumno/card-alumno.component';
import { MensajeriaComponent } from './components/profesor/mensajeria/mensajeria.component';
import { ListarUsuariosComponent } from './components/profesor/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    CardAlumnoComponent,
    MensajeriaComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
