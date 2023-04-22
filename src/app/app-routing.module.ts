import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { ProfesorComponent } from './components/profesor/profesor/profesor.component';
import { ListarUsuariosComponent } from './components/profesor/listar-usuarios/listar-usuarios.component';
import { CardAlumnoComponent } from './components/profesor/card-alumno/card-alumno.component';
import { MensajeriaComponent } from './components/profesor/mensajeria/mensajeria.component';
import { ConversacionComponent } from './components/profesor/conversacion/conversacion.component';
import { TablaComponent } from './components/horario/tabla/tabla.component';
import { TareaListComponent } from './components/profesor/tarea/tarea-list/tarea-list.component';
import { NewTareaComponent } from './components/profesor/tarea/new-tarea/new-tarea.component';
import { TareaComponent } from './components/tutor/tarea/tarea.component';
import { EditTareaComponent } from './components/profesor/tarea/edit-tarea/edit-tarea.component';
import { FormularioComponent } from './components/horario/formulario/formulario.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { ListarAlumnosComponent } from './components/tutor/listar-alumnos/listar-alumnos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListarClasesComponent } from './components/clase/listar-clases/listar-clases.component';
import { ClaseViewComponent } from './components/clase/clase-view/clase-view.component';
import { CardAsignaturaComponent } from './components/asignatura/card-asignatura/card-asignatura.component';
import { CrearAsignaturaComponent } from './components/profesor/crear-asignatura/crear-asignatura.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'profesor', component: ProfesorComponent,
    canActivate: [
      () => inject(LoginGuard).canActivate(),
      () => inject(LoginGuard).checkProfesor()
    ]
  },
  { path: 'profesor/alumnos', component: ListarUsuariosComponent },
  { path: 'profesor/alumnos/:id/:claseId', component: CardAlumnoComponent },
  { path: 'profesor/conversacion', component: ConversacionComponent },
  { path: 'profesor/mensajeria/:conversacionID', component: MensajeriaComponent },
  { path: 'profesor/clase/:id', component: ClaseViewComponent },
  { path: 'profesor/asignaturas/:id/:nombre', component: CardAsignaturaComponent },
  { path: 'profesor/crear', component: CrearAsignaturaComponent },
  //Rutas de tarea
  { path: 'profesor/tarea', component: TareaListComponent },
  { path: 'profesor/tarea/new', component: NewTareaComponent },
  { path: 'profesor/tarea/edit/:tareaid', component: EditTareaComponent },
  // Rutas de alumno
  {
    path: 'alumno', component: AlumnoComponent,
    canActivate: [
      () => inject(LoginGuard).canActivate(),
      () => inject(LoginGuard).checkAlumno()
    ]
  },



  // Rutas Horario
  { path: 'horario', component: TablaComponent },
  { path: 'horario/registro', component: FormularioComponent },
  //La ruta clase es prescindible, está para comprobar el componente
  { path: 'clase', component: ListarClasesComponent },
  // Rutas del tutor
  {
    path: 'tutor', component: TutorComponent,
    canActivate: [
      () => inject(LoginGuard).canActivate(),
      () => inject(LoginGuard).checkTutor()
    ]
  },
  { path: 'tutor/alumnos/:tutorId', component: ListarAlumnosComponent },
  { path: 'tutor/alumno/clase/:id', component: TareaComponent },
  //Perfil
  { path: 'perfil', component: PerfilComponent },

  //Asinaturas


  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
