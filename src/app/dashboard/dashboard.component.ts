import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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
