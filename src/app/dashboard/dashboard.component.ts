import { trigger, transition, query, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fader } from '../admin/route-animations';

import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
   fader
  ]
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  footerDialog(){
  const dialogRef = this.dialog.open(DashboardFooterComponent, {
  });

  dialogRef.afterOpened().subscribe(res => {
    console.log('The EditForm is opened');
  })
  }

}
