import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlocationComponent } from '../addlocation/addlocation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormComponent } from '../form/form.component';
import { HostelComponent } from '../Locations/hostel/hostel.component';
import { NewComponent } from '../new/new.component';

const AdminRoutes : Routes = [
    {path:'',component:DashboardComponent},
    {path:'new',component:NewComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"addlocation",component:AddlocationComponent},
    {path:"form",component:FormComponent},

    {path:"canteen",component:HostelComponent},
]

@NgModule({
    imports:[RouterModule.forChild(AdminRoutes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}