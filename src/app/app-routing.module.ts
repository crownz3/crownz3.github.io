import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GLoginComponent } from './g-login/g-login.component';

const routes: Routes = [
  {path:'',component:GLoginComponent},
  {path:'admin', component:AdminComponent ,loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }