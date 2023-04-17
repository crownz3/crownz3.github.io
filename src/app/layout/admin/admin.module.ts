import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../../material.module';
import { AdminRoutingModule } from './admin.routing';
import { CommonModule } from '@angular/common';  
import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table'  
import { AddlocationComponent } from '../../addlocation/addlocation.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HostelComponent } from '../../Locations/hostel/hostel.component';
import { NewComponent } from '../../new/new.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrcodeComponent } from 'src/app/Dialogs/qrcode/qrcode.component';

@NgModule({
    declarations:[
        AdminComponent,
        AddlocationComponent,
        HostelComponent,
        NewComponent,
        QrcodeComponent
    ],
    imports:[
        NgxQRCodeModule,
        AdminRoutingModule,RouterModule,MaterialModule,CommonModule,MatTableModule,FormsModule,ReactiveFormsModule,MatInputModule,NgChartsModule,
    ]
})

export class AdminModule{}