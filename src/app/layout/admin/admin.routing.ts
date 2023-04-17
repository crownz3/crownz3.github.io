import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlocationComponent } from '../../addlocation/addlocation.component';
import { AdminDashboardComponent } from '../../dashboard/admin-dashboard/admin-dashboard.component';
import { NewComponent } from '../../new/new.component';

const AdminRoutes: Routes = [
  { path: '', component: AdminDashboardComponent, data: { name: 'Dashboard' } },
  { path: 'new', component: NewComponent, data: { name: 'new' } },
  { path: 'dashboard', component: AdminDashboardComponent, data: { name: 'Dashboard' } },
  {
    path: 'addlocation',
    component: AddlocationComponent,
    data: { name: 'addlocation' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
