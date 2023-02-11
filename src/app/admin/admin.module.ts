import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin.routing';
import { CommonModule } from '@angular/common';  
import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table'  
import { AddlocationComponent } from '../addlocation/addlocation.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HostelComponent } from '../Locations/hostel/hostel.component';
import { NewComponent } from '../new/new.component';
import { FormComponent } from '../form/form.component';
import { ViewFormDialogComponent } from '../Dialogs/view-form-dialog/view-form-dialog.component';
import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
    declarations:[
        AdminComponent,
        AddlocationComponent,
        HostelComponent,
        NewComponent,
        FormComponent,
        ViewFormDialogComponent,
        DashboardFooterComponent
        
    ],
    imports:[
        AdminRoutingModule,RouterModule,MaterialModule,CommonModule,MatTableModule,FormsModule,ReactiveFormsModule,MatInputModule,NgChartsModule
    ]
})

export class AdminModule{}