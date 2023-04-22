import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardAlumnoComponent } from './components/profesor/card-alumno/card-alumno.component';
import { MensajeriaComponent } from './components/profesor/mensajeria/mensajeria.component';
import { ListarUsuariosComponent } from './components/profesor/listar-usuarios/listar-usuarios.component';
import { ProfesorComponent } from './components/profesor/profesor/profesor.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ConversacionComponent } from './components/profesor/conversacion/conversacion.component';
import { FormularioComponent } from './components/horario/formulario/formulario.component';
import { TablaComponent } from './components/horario/tabla/tabla.component';
import { TareaListComponent } from './components/profesor/tarea/tarea-list/tarea-list.component';
import { NewTareaComponent } from './components/profesor/tarea/new-tarea/new-tarea.component';
import { EditTareaComponent } from './components/profesor/tarea/edit-tarea/edit-tarea.component';
import { TareaComponent } from './components/tutor/tarea/tarea.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorComponent } from './components/tutor/tutor.component';
import { ListarAlumnosComponent } from './components/tutor/listar-alumnos/listar-alumnos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListarClasesComponent } from './components/clase/listar-clases/listar-clases.component';
import { ClaseViewComponent } from './components/clase/clase-view/clase-view.component';
import { ListarAsignaturasComponent } from './components/asignatura/listar-asignaturas/listar-asignaturas.component';
import { CardAsignaturaComponent } from './components/asignatura/card-asignatura/card-asignatura.component';
import { CrearAsignaturaComponent } from './components/profesor/crear-asignatura/crear-asignatura.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { NewObservacionComponent } from './components/observacion/new-observacion/new-observacion.component';
import { NewConversacionComponent } from './components/new-conversacion/new-conversacion.component';


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
    ListarUsuariosComponent,
    ProfesorComponent,
    ConversacionComponent,
    FormularioComponent,
    TablaComponent,
    TareaListComponent,
    NewTareaComponent,
    EditTareaComponent,
    TareaComponent,
    TutorComponent,
    ListarAlumnosComponent,
    PerfilComponent,
    ListarClasesComponent,
    ClaseViewComponent,
    ListarAsignaturasComponent,
    CardAsignaturaComponent,
    CrearAsignaturaComponent,
    AlumnoComponent,
    NewObservacionComponent,
    NewConversacionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
