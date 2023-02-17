import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Chart } from 'chart.js';
// import { slideInAnimation } from '../admin/route-animations';
import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class DashboardComponent implements OnInit{

  public chart: any;

    locations = [
    {
      name: 'Hostel',
      updated: new Date('1/1/16'),
      status:'completed'
    },
    {
      name: 'Canteen',
      updated: new Date('12/17/16'),
      status:'pending'
    },
    {
      name: 'Ground',
      updated: new Date('1/28/16'),
      status:'completed'
    },
    {
      name: ' ECE Toilet',
      updated: new Date('3/28/16'),
      status:'completed'
    }, {
      name: 'Restroom',
      updated: new Date('7/28/16'),
      status:'completed'
    }, {
      name: 'Office',
      updated: new Date('8/28/16'),
      status:'process'
    }, {
      name: 'Seminor Hall',
      updated: new Date('4/28/16'),
      status:'completed'
    }, {
      name: 'Entrance',
      updated: new Date('11/28/16'),
      status:'pending'
    }, {
      name: 'ERP',
      updated: new Date('12/28/16'),
      status:'completed'
    }, {
      name: 'COE',
      updated: new Date('7/28/16'),
      status:'completed'
    }, {
      name: 'Other',
      updated: new Date('1/28/16'),
      status:'process'
    }, {
      name: 'CSE Toilet',
      updated: new Date('6/28/16'),
      status:'process'
    }, {
      name: 'Placement Cell',
      updated: new Date('5/28/16'),
      status:'completed'
    }, {
      name: 'Preparation Hall',
      updated: new Date('8/28/16'),
      status:'completed'
    }, {
      name: 'Exam Hall',
      updated: new Date('2/28/16'),
      status:'completed'
    }, {
      name: 'Main Office',
      updated: new Date('4/28/16'),
      status:'completed'
    }, {
      name: 'Bike Stand',
      updated: new Date('1/28/16'),
      status:'pending'
    }, {
      name: 'Auditorium',
      updated: new Date('8/28/16'),
      status:'completed'
    }, {
      name: 'Indoor Ground',
      updated: new Date('9/28/16'),
      status:'completed'
    }, {
      name: 'Car Parking',
      updated: new Date('10/28/16'),
      status:'process'
    },
  ];
  currentRoute: any;

  constructor(public dialog: MatDialog,public router:Router) {
    console.log(router.url)
   
   }

    

  ngOnInit(): void {
    this.createChart();

    
  }

  footerDialog(){
  const dialogRef = this.dialog.open(DashboardFooterComponent, {
  });

  dialogRef.afterOpened().subscribe(res => {
    console.log('The EditForm is opened');
  })
  }


  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'radar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Hostel', 'Canteen', 'Ground','MBA BLOCK',
								 'Toilet', 'Office', 'Seminar Hall','Others', ], 
	       datasets: [
          {
            label: "Complaints",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: '#4682b4'
          },
          {
            label: "Solved",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#ade8ff'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

 
}

