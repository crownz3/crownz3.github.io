import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from 'src/app/dashboard/user-dashboard/user-dashboard.component';
import { AddlocationComponent } from '../../addlocation/addlocation.component';
import { FormComponent } from '../../form/form.component';
import { HostelComponent } from '../../Locations/hostel/hostel.component';
import { NewComponent } from '../../new/new.component';

const UserRoutes: Routes = [
  { path: '', component: UserDashboardComponent, data: { name: 'Dashboard' } },
  { path: 'new', component: NewComponent, data: { name: 'new' } },
  { path: 'dashboard', component: UserDashboardComponent, data: { name: 'Dashboard' } },
  { path: 'form', component: FormComponent, data: { name: 'form' } },
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
