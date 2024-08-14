import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:'home', loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
  {path:'user/:id', loadComponent:()=>import('./components/user-data/user-data.component').then((m)=>m.UserDataComponent)},
  {path:'**', loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
