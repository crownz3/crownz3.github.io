import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';  
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormComponent } from '../../form/form.component';
import { NgChartsModule } from 'ng2-charts';
import { UserRoutingModule } from './user.routing';
@NgModule({
    declarations:[
        
        FormComponent,

    ],
    imports:[
       UserRoutingModule,RouterModule,MaterialModule,CommonModule,MatTableModule,FormsModule,ReactiveFormsModule,MatInputModule,NgChartsModule
    ]
})

export class UserModule{}