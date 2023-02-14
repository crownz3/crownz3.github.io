import { Component, ViewChild, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ViewFormDialogComponent } from '../Dialogs/view-form-dialog/view-form-dialog.component';
import {  slideInAnimation } from '../admin/route-animations';


const data: any[] | undefined = [
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },
  { location: "Hostel", landmark: "Near Ground", status: "In Active", Operation: "-" },




]




@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css'],
  animations: [
    slideInAnimation
   ]
})


export class AddlocationComponent {
  displayedColumns: any[] = ["Sno", "Location", "Landmark", "Status", "Operations"];
  dataSource = new MatTableDataSource(data);

  @ViewChild(MatPaginator) paginator: any;

  locationSelected = "";
  select: string = '';
  addlocation = false;
  addQuestion = false;
  addNewQuestion = false;
  showAdd = false;
  hideClose = true;
  locationForm: FormGroup | any;
  questionForm: FormGroup | any;
  optionForm: FormGroup | any;
  question = [];
  optBtnShow: any;
  val: any = false;
  styleExp = true;
  theForm: FormGroup | any;



  constructor(private fb: FormBuilder, public dialog: MatDialog) { }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;

    // javascript function call
    window.addEventListener('resize', () => {
      let screen = window.matchMedia("(max-width:600px)")
      let screenSize = screen.matches
      if (!screenSize) {
        this.styleExp = false
      } else {
        this.styleExp = true
      }
    })





    this.theForm = this.fb.group({
    
        'location' : new FormControl("",Validators.required),
        'landmark': new FormControl("", Validators.required),
        'latitude': new FormControl("8.7321° N"),
        'longitude': new FormControl("77.7241° E"),
        'remarks': new FormControl(""),
        'status': new FormControl("", Validators.required),
      questions:this.fb.array([])
    })


  }

  

    questions():FormArray{
      return this.theForm.get('questions') as FormArray
    }

    // questions():FormArray{
    //   return this.theForm.get('questions') as FormArray
    // }

    buttonShow(questionIndex : any){
      this.optionButtonShow(questionIndex)
    }

    btnShow(i: any){
      let btnshow = this.questions().at(i).get('btn') as FormControl
      return btnshow.value
    }

    optionButtonShow(i: any){

      let btnshow = this.questions().at(i).get('btn') as FormControl
      let selectOptIndex = this.questions().at(i).get('selectOption') as FormControl

      if (selectOptIndex.value === 'radio' || selectOptIndex.value === 'checkbox') {
        btnshow.setValue(false)
        if (this.theForm.controls.questions.controls[0].controls.options.length === 0) {
          this.addQuestionOption(i)
        }


      } else if (selectOptIndex.value === 'text') {
        btnshow.setValue(true)
      }


      if (selectOptIndex.value === 'text') {
        let clearOptObj = this.questions().at(i).get('options') as FormArray
        clearOptObj.clear()

      }

    }



    newQuestion():FormGroup{
      return this.fb.group({
        question: new FormControl("", Validators.required),
        selectOption: new FormControl("", Validators.required),
        btn: new FormControl(true, Validators.required),
        options: this.fb.array([]),
      })

    }



    addQuestions(){
      this.questions().push(this.newQuestion())
      console.log(this.questions())
    console.log(this.theForm.get('questions') )

    }

    removeQuestions(questionIndex: number){
      this.questions().removeAt(questionIndex)
    }

    questionsOption(questionIndex: number):FormArray{
      return this.questions().at(questionIndex).get('options') as FormArray
    }

    newOptions():FormGroup{
      return this.fb.group({
        opt: new FormControl("", Validators.required),
      })
    }


    addQuestionOption(questionIndex: number){
      this.questionsOption(questionIndex).push(this.newOptions())
    }

    removeQuestionOption(questionIndex: number, optionIndex: number){
      this.questionsOption(questionIndex).removeAt(optionIndex)
    }



    addLocation(){
      this.addlocation === false ? this.addlocation = true : this.addlocation = false;
      this.addQuestion === false ? this.addQuestion = true : this.addQuestion = false;
      this.showAdd === false ? this.showAdd = true : this.showAdd = false
      this.hideClose = false
    }



    close(){
      this.questions().clear()
      this.showAdd = false
      this.hideClose = true
      this.addlocation = false
      this.addQuestion = false

    }



    closeCard(i: any){
      let userArr = this.theForm?.get('ques') as FormArray;
      userArr.removeAt(i)
    }

    generateForm(){
      alert('Generate the Form')
    }



    editForm(){
      alert("The editForm")
    }


    viewForm(){
      const dialogRef = this.dialog.open(ViewFormDialogComponent, {
      });

      dialogRef.afterOpened().subscribe(res => {
        console.log('The EditForm is opened');
      })

    }

    submit(){
      this.showAdd = false
      this.hideClose = true
      this.addlocation = false
      this.addQuestion = false
      this.addNewQuestion = false

      // Final Object 
      let jsonFile = JSON.stringify(this.theForm.value)
      localStorage.setItem("Question", jsonFile)
      // localStorage.clear()
    }

  }




