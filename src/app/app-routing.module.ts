import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { InaComponent } from './components/ina/ina.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const routes: Routes = [
  { path: '', component:InaComponent},
  { path: 'estudiantes', component:EstudiantesComponent},
  { path: 'profesores', component:ProfesoresComponent},
  { path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
