import { Component, ViewChild ,ElementRef  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { localStorage } from '../service/localStorage.service';
import { QrcodeComponent } from '../Dialogs/qrcode/qrcode.component';
@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css'],
})
export class AddlocationComponent {

  baseUrl = environment.serverBaseUrl;

  displayedColumns: any[] = [
    'Sno',
    'Location',
    'Landmark',
    'Status',
    'Operations',
  ];

  @ViewChild(MatPaginator) paginator: any;
  data: any[]  = [];
  locationSelected = '';
  select: string = '';
  addlocation = false;
  addQuestion = false;
  addNewQuestion = false;
  showAdd = false;
  hideClose = true;
  optBtnShow: any;
  styleExp = true;
  theForm: FormGroup | any;
  createdBy :any
  dataSource = new MatTableDataSource();

  constructor(private fb: FormBuilder, public dialog: MatDialog,private http :HttpClient,private local : localStorage) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

   this.createdBy =  this.local.getLocal('createdBy')

    this.http.get(this.baseUrl + 'location/getLocation').subscribe((res:any)=>{
      this.data = res.result
      console.log(this.data)
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    })

    this.dataSource.paginator = this.paginator;

    window.addEventListener('resize', () => {
      let screen = window.matchMedia('(max-width:600px)');
      let screenSize = screen.matches;
      if (!screenSize) {
        this.styleExp = false;
      } else {
        this.styleExp = true;
      }
    });

    this.theForm = this.fb.group({
      createdBy: new FormControl(this.createdBy),
      locationId:new FormControl(null),
      location: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      latitude: new FormControl('8.7321° N'),
      longitude: new FormControl('77.7241° E'),
      remarks: new FormControl(''),
      status: new FormControl('Active', Validators.required),
      questionList: this.fb.array([]),
    });
  }

  questions(): FormArray {
    return this.theForm.get('questionList') as FormArray;
  }

  buttonShow(questionIndex: any) {
    this.optionButtonShow(questionIndex);
  }

  btnShow(i: any) {
    let btnshow = this.questions().at(i).get('btn') as FormControl;
    return btnshow.value;
  }

  optionButtonShow(i: any) {
    let btnshow = this.questions().at(i).get('btn') as FormControl;
    let selectOptIndex = this.questions()
      .at(i)
      .get('selectOption') as FormControl;

    if (
      selectOptIndex.value === 'radio' ||
      selectOptIndex.value === 'checkbox'
    ) {
      btnshow.setValue(false);
      if (
        this.theForm.controls.questionList.controls[0].controls.optionsList.length ===
        0
      ) {
        this.addQuestionOption(i);
      }
    } else if (selectOptIndex.value === 'text') {
      btnshow.setValue(true);
    }

    if (selectOptIndex.value === 'text') {
      let clearOptObj = this.questions().at(i).get('optionsList') as FormArray;
      clearOptObj.clear();
    }
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      questionActive:new FormControl('1'),
      questionId:new FormControl(null),
      question: new FormControl('', Validators.required),
      selectOption: new FormControl('', Validators.required),
      btn: new FormControl(true, Validators.required),
      optionsList: this.fb.array([]),
    });
  }

  addQuestions() {
    this.questions().push(this.newQuestion());
  }

  removeQuestions(questionIndex: number) {
    this.questions().removeAt(questionIndex);
  }

  questionsOption(questionIndex: number): FormArray {
    return this.questions().at(questionIndex).get('optionsList') as FormArray;
  }

  newOptions(): FormGroup {
    return this.fb.group({
      optionActive:new FormControl('1'),
      optionId:new FormControl(null),
      option: new FormControl('', Validators.required),
    });
  }

  addQuestionOption(questionIndex: number) {
    this.questionsOption(questionIndex).push(this.newOptions());
  }

  removeQuestionOption(questionIndex: number, optionIndex: number) {
    this.questionsOption(questionIndex).removeAt(optionIndex);
  }

  addLocation() {
    this.addlocation === false
      ? (this.addlocation = true)
      : (this.addlocation = false);
    this.addQuestion === false
      ? (this.addQuestion = true)
      : (this.addQuestion = false);
    this.showAdd === false ? (this.showAdd = true) : (this.showAdd = false);
    this.hideClose = false;
  }

  close() {
    this.questions().clear();
    this.showAdd = false;
    this.hideClose = true;
    this.addlocation = false;
    this.addQuestion = false;
  }

  closeCard(i: any) {
    let userArr = this.theForm?.get('ques') as FormArray;
    userArr.removeAt(i);
  }

  generateForm(i:number) {
    let locationId = this.data[i].locationId
    let url = this.baseUrl + 'question/getQuestion/' + locationId 
    console.log(url)
      this.http.get(this.baseUrl + 'question/getQuestion/' + locationId).subscribe((res:any)=>{
      console.log(res)
      const dialogRef = this.dialog.open(QrcodeComponent, {
        data : `${location.origin}?q=${locationId}`
      });
      dialogRef.afterOpened().subscribe((res) => {
        console.log(res);
      });
    })
     
  }

  editForm(i:number) {
    // let locationId = this.data[i].locationId
    // this.http.get(this.baseUrl + 'question/getQuestion/' + locationId).subscribe((res:any)=>{
    //   console.log(res)
    //   const dialogRef = this.dialog.open(ViewFormDialogComponent, {
    //     data: { name: res },
    //   });
    //   dialogRef.afterOpened().subscribe((res) => {
    //     console.log(res);
    //   });
    // })
    
  }

  viewForm(i:number) {
   
    // const dialogRef = this.dialog.open(ViewFormDialogComponent, {});
    // dialogRef.afterOpened().subscribe((res) => {
    //   console.log('The EditForm is opened');
    // });
  }

  submit() {
    this.showAdd = false;
    this.hideClose = true;
    this.addlocation = false;
    this.addQuestion = false;
    this.addNewQuestion = false;

    
    // Final Object
    let jsonFile = JSON.stringify(this.theForm.value);
    console.log(this.theForm.value)
    this.http.post(this.baseUrl + 'location/addLocation' , this.theForm.value).subscribe((res:any)=>{
      console.log(res)
    })
    this.theForm.reset()
    // console.log(jsonFile)
    // localStorage.setItem('Question', jsonFile);
    // localStorage.clear()
  }
}
