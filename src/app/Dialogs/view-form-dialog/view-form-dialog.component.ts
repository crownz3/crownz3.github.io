import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

const data1 :any[] | undefined = [
  {user:'Ibrahim',responseOn:'12-01-2023',something:'Nothing'},
  {user:'Mohamed',responseOn:'14-01-2023',something:'Anything'},
  {user:'Saravanan',responseOn:'18-01-2023',something:'Something'},
  {user:'Mathan',responseOn:'17-01-2023',something:'Funthing'},
  {user:'Muthu Kumar',responseOn:'11-01-2023',something:'Solothing'},
  {user:'Mathan',responseOn:'19-01-2023',something:'DashThing'},
  {user:'Palani',responseOn:'8-01-2023',something:'Matchthing'},
  {user:'Amman',responseOn:'01-01-2023',something:'Making'},
  {user:'Aruvi',responseOn:'28-01-2023',something:'Fasting'},
  {user:'Nelthooval',responseOn:'14-01-2023',something:'Drowning'},
  {user:'Kadal',responseOn:'18-01-2023',something:'Loading'},
]



@Component({
  selector: 'app-view-form-dialog',
  templateUrl: './view-form-dialog.component.html',
  styleUrls: ['./view-form-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expand', style({ height: '*' })),
      transition('expand <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewFormDialogComponent implements OnInit {
  displayedColumns :any[] = ["Sno","user","reponseOn","something"];
  dataSource = new MatTableDataSource(data1);
  @ViewChild(MatPaginator) paginator: any;
  obj = {name:'ibrahim',age:27,gender:'male'}
  panelOpenState = true;
  locationData : any
  newData : any = []
  ReceivedData : any

  constructor(
    public dialogRef: MatDialogRef<ViewFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewFormDialogComponent,
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator

    this.getData()

    data1?.forEach(el=> el.expand = false )
  
  }

  manageAllRows(some:any){
    data1?.forEach(el=> el.expand = some )
    this.panelOpenState === false ? this.panelOpenState = true : this.panelOpenState = false;

  }

  toggleRow(element:{expand:boolean}){
    this.panelOpenState === false ? this.panelOpenState = true : this.panelOpenState = false;

    data1?.forEach((el:any,i)=>{
      if(element === el){
          el.expand = !el.expand 

      } else {
        el.expand = false
      }
    })

    data1?.forEach((el:any)=>{

      if(el.expand === true){
        this.panelOpenState = false
      }
    })
    
  }

  getData(){
    let Recdata: any = localStorage.getItem('Question');
    this.ReceivedData = JSON.parse(Recdata);
    let RecData:any = localStorage.getItem('Answers')
    let ReceivedAnswerData = JSON.parse(RecData)
    let answerData = ReceivedAnswerData.answer
    this.ReceivedData.questions.forEach((el:any,i:any)=>{
      this.newData.push({question:el.question,answer:ReceivedAnswerData[i].answer})
    })
  }

  closeDialog(pandian:any){
    this.dialogRef.close()
    console.count(pandian )
  }
}
