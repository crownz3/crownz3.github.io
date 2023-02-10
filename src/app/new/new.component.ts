import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Ticks } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ObjectServiceService } from '../Services/object-service.service';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ViewFormDialogComponent } from '../Dialogs/view-form-dialog/view-form-dialog.component';
import { environment } from 'src/environments/environment';

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: string;
//   phone: string;
//   website: string;
//   company: string;
//   expanded: boolean;
// }

// const ELEMENT_DATA: User[] = [
//   {
//     "id": 123,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": "Kulas Light Apt. 556 Gwenborough",
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": "Romaguera-Crona",
//     "expanded": false
//   },
//   {
//     "id": 52,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": "Victor Plains Suite 879 Wisokyburgh",
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": "Deckow-Crist",
//     "expanded": false
//   },
//   {
//     "id": 62,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": "Douglas Extension Suite 847 McKenziehaven",
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": "Romaguera-Jacobson",
//     "expanded": false
//   },
//   {
//     "id": 65,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": "Hoeger Mall Apt. 692 South Elvis",
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": "Robel-Corkery",
//     "expanded": false
//   },
//   {
//     "id": 84,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": "Skiles Walks Suite 351 Roscoeview",
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": "Keebler LLC",
//     "expanded": false
//   }
// ];
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class NewComponent implements OnInit {
  sample : FormGroup | any
 

  // panelOpenState = true
  // OpenState = false

  // title = 'angular-mat-table-example';

  // dataSource = ELEMENT_DATA;
  // columnsToDisplay = ['id', 'name', 'username', 'email', 'address'];

  // toggleRow(element: { expanded: boolean; }) {
  //   element.expanded = !element.expanded
  // }

  // manageAllRows(flag: boolean) {
  //   ELEMENT_DATA.forEach(row => {
  //     row.expanded = flag;
  //   })
  // }
  ngOnInit(): void {
    // this.summaForm = this.fb.group({
    //   rashid:this.fb.array([])
    // })
   

    this.sample = this.fb.array([])
    this.addPerson()
  }

  constructor(private logger:ObjectServiceService,private fb:FormBuilder,) //  private fb:FormBuilder,
  {}


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        grid:{display:true},ticks:{font:{family:'Poppins',weight:'500'}}
      },
      y: {
        ticks:{font:{family:'Poppins',weight:'500'}},
        min: 10
      },
      
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Hostel', 'Canteen', 'Ground', 'Seminar Hall', 'Toilets', 'Entrance' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Complaints',  borderColor: '#36A2EB',
      backgroundColor: '#ade8ff',borderRadius:24, },
      
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40 ];

  //   this.chart?.update();
  // }
  //   question():FormArray{
  //     return this.summaForm.get('rashid') as FormArray
  //   }

  scroll(t:HTMLElement){
      t.scrollIntoView({behavior:'smooth' })
}

samples():FormArray{
  return this.sample as FormArray
}

newSample():FormGroup{
  return this.fb.group({
    personName : new FormControl('',Validators.required),
    age : new FormControl('',Validators.required),
    bloodType : new FormControl('',Validators.required),
  })
}

addPerson(){
  this.samples().push(this.newSample())
}

removePerson(i:any){
  this.samples().removeAt(i)
}

submit(){
  console.log(this.sample.value)
}

  //   newquestion():FormGroup{
  //     return this.fb.group({
  //       firstName:new FormControl('',Validators.required),
  //       secondName:new FormControl(''),
  //       lastName:new FormControl('',Validators.required) ,
  //       wishes:this.fb.array([])
  //     })
  //   }

  //   addPerson(){
  //     this.question().push(this.newquestion())
  //   }

  //   removePerson(i:any){
  //     this.question().removeAt(i)
  //     console.log(i)
  //   }

  //   personWishes(i:any):FormArray{
  //     return this.question().at(i).get('wishes') as FormArray
  //   }

  //   newWishes():FormGroup{
  //     return this.fb.group({
  //       wish:new FormControl('',Validators.required)
  //     })
  //   }

  //   addWishes(i:any){
  //     this.personWishes(i).push(this.newWishes())
  //   }

  //   removeWish(i:any,w:any){
  //     this.personWishes(i).removeAt(w)
  //   }

  //   closeForm(){
  //     this.question().clear()
  //   }

  //   submit(){
  //     console.log(this.summaForm)
  //   }

  //   expand(){
  //     if(!this.OpenState){
  //       let body = document.querySelector('.Header')
  //       body?.setAttribute('style','padding-bottom: 100px')
  //       let inn = body?.querySelector('.material-icons')
  //       inn?.setAttribute('style','transform:rotate(180deg)')
  //       this.OpenState = true
  //     } else if(this.OpenState){
  //       let body = document.querySelector('.Header')
  //       body?.setAttribute('style','padding-bottom: 10px')
  //       let inn = body?.querySelector('.material-icons')
  //       inn?.setAttribute('style','transform:rotate(0deg)')
  //       this.OpenState = true
  //         this.OpenState = false
  //     }
  //       }
  // }

  // fontColor = '#b1b1b1';
  // sayHelloId = 1;
  // canClick = false;
  // message = 'Hello, World';
 
  // sayMessage() {
  //   alert(this.message);
  // }

  // message = "I'm read only!";
  // canEdit = false;
  // count = 0
  // onEditClick() {
  //   this.canEdit = !this.canEdit;
  //   if (this.canEdit) {
  //     this.message = 'You can edit me!';
  //   } else {
  //     this.message = "I'm read only!";
  //   }

  //   this.logger.writeCount(this.count)
  //   this.count++
  // }

  // @Input() product! : product

   products = [{name:'crown',description:'Me',price:700},{name:'feel',description:'Good',price:800},{name:'make',description:'Good',price:400},{name:'me',price:400}]
  
   share(){
      console.log("h")
   }


   
}
