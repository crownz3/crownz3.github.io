import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent implements OnInit {


  theForm = false;
  theCard = false;
  theComplain = false;
  theNewComplain  = false;
  theFormgroup = true;
  data:any = []
 
obj = 
  {
    RegNo : '',
    Name : '',
    Department : '',
    Course : '',
    cNo : '',
    mail : '',
    Complaint :'',
    Place : '',
    mes : '',
    Time:"12:50",
    Date:"21/09/2022",
    Status:"-"
  }

  constructor() { }

  ngOnInit(): void {
    this.obj['RegNo'] = this.Data[0].RegNo;
    this.obj['Name'] = this.Data[0].name;
    this.obj['Department'] = this.Data[0].department;
    this.obj['Course'] = this.Data[0].course;
  }

 Data = [
    {position: 1, name: 'Ibrahim', RegNo: '951818104016', department: 'CSE',course:"B.E",complaint:"Tasteless"}
  ];

  headers = ["Name","RegNo","Course","Department","Complaint","Place","Date","Time"]
  serialNo = ['Sno']

  rows: any = [
  {
    
    Name:"Ibrahim",
    RegNo:"951818104017",
    Course:"B.E",
    Department:"CSE",
    Complaint:"Food Waste",
    Place : "Canteen",
    Time:"12:00",
    Date:"21/09/2022",
    Status:"Cleared"
  },
  {
    
    Name:"Ibrahim",
    RegNo:"951818104017",
    Course:"B.E",
    Department:"CSE",
    Complaint:"Food Waste",
    Place : "Canteen",
    Time:"12:00",
    Date:"21/09/2022",
    Status:"Cleared"
  },
  {
    
    Name:"Ibrahim",
    RegNo:"951818104017",
    Course:"B.E",
    Department:"CSE",
    Complaint:"Food Waste",
    Place : "Canteen",
    Time:"12:00",
    Date:"21/09/2022",
    Status:"Cleared"
  },
  {
    
    Name:"Ibrahim",
    RegNo:"951818104017",
    Course:"B.E",
    Department:"CSE",
    Complaint:"Food Waste",
    Place : "Canteen",
    Time:"12:00",
    Date:"21/09/2022",
    Status:"Cleared"
  },
  {
    
    Name:"Ibrahim",
    RegNo:"951818104017",
    Course:"B.E",
    Department:"CSE",
    Complaint:"Food Waste",
    Place : "Canteen",
    Time:"12:00",
    Date:"21/09/2022",
    Status:"Cleared"
  },

]

toggle(){
  this.theForm === false  ? this.theForm = true : this.theForm = false;
}

submit(){
  this.theCard = true
  this.theComplain = true
  this.theNewComplain === false ? this.theFormgroup = false : this.theFormgroup = true  
  this.rows.push(this.obj)
  this.obj =
  {   
      RegNo : '',
      Name : '',
      Department : '',
      Course : '',
      cNo : '',
      mail : '',
      Complaint :'',
      Place : '',
      mes : '',
      Time:"12:50",
      Date:"21/09/2022",
      Status:"-" 
  }
  this.obj['RegNo'] = this.Data[0].RegNo;
  this.obj['Name'] = this.Data[0].name;
  this.obj['Department'] = this.Data[0].department;
  this.obj['Course'] = this.Data[0].course;
}

theNewComplaint(){
  this.theFormgroup = true
}


close(){
  this.theForm === false  ? this.theForm = true : this.theForm = false;
  this.theComplain = false
}



}
