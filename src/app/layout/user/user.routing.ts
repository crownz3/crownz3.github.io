import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlocationComponent } from '../../addlocation/addlocation.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormComponent } from '../../form/form.component';
import { HostelComponent } from '../../Locations/hostel/hostel.component';
import { NewComponent } from '../../new/new.component';

const UserRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { name: 'Dashboard' } },
  { path: 'new', component: NewComponent, data: { name: 'new' } },
  { path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' } },
  {
    path: 'addlocation',
    component: AddlocationComponent,
    data: { name: 'addlocation' },
  },
  { path: 'form', component: FormComponent, data: { name: 'form' } },

  { path: 'canteen', component: HostelComponent, data: { name: 'canteen' } },
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
