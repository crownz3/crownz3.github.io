import { Component, Inject,  OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.css']
})
export class DashboardFooterComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DashboardFooterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DashboardFooterComponent) { }

  ngOnInit(): void {
  }


  closeDialog(){
    this.dialogRef.close()
  }

}
