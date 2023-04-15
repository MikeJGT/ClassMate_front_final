import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { ProfesorComponent } from './components/profesor/profesor/profesor.component';
import { ListarUsuariosComponent } from './components/profesor/listar-usuarios/listar-usuarios.component';
import { CardAlumnoComponent } from './components/profesor/card-alumno/card-alumno.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'profesor/alumnos', component: ListarUsuariosComponent },
  { path: 'profesor/alumnos/:alumnoid', component: CardAlumnoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
