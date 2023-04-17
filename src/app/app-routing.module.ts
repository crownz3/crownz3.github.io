import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { GLoginComponent } from './g-login/g-login.component';
import { UserComponent } from './layout/user/user.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent ,loadChildren: () => import('./layout/admin/admin.module').then(m => m.AdminModule) },
  {path:'user', component:UserComponent ,loadChildren: () => import('./layout/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
