import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FiltrosComponent } from './filtros/filtros.component';


const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'filtros', component: FiltrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }