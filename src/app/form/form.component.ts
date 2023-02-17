import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
// import { slideInAnimation } from '../admin/route-animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // animations: [
  //     slideInAnimation
  //  ]
})
export class FormComponent implements OnInit {
  ReceivedData: any;
  obj: any;
  theAnswerForm: FormGroup | any;
  submitted = false
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getData();  
    this.theAnswerForm = this.fb.array([
    ])
    this.loooping();

  }


   getData() {
    let Recdata: any = localStorage.getItem('Question');
    this.ReceivedData = JSON.parse(Recdata);
   
  }

  footerText(){
    let el =  document.querySelector('.master-parent')
    let el1 = el?.querySelector<HTMLElement>('.m-footer')
    if(el1){
      el1.textContent = "Type your own complaint about this location" ? "We will Fix this soon!!!" : "";
    }
    console.log(el1)
  }

  noth(){
    console.log('Okay')
  }
  
  newAnswer(i: any): FormGroup {
    if (this.ReceivedData.questions[i].selectOption === 'checkbox') {
      
      return this.fb.group({
        questionNo: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        landmark: new FormControl('', Validators.required),
        question: new FormControl('', Validators.required),
        answerType: new FormControl('',Validators.required), 
        answer: this.fb.array([],Validators.required),
      });
      
    } else {
      return this.fb.group({
        questionNo: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        landmark: new FormControl('', Validators.required),
        question: new FormControl('', Validators.required),
        answerType: new FormControl('',Validators.required), 
        answer: new FormControl('', Validators.required),
      });
    }
  }

  
  loooping() {
    for (let i = 0; i < this.ReceivedData.questions.length; i++) {
      this.theAnswerForm.push(this.newAnswer(i));

      this.theAnswerForm.controls[i].patchValue({
        questionNo: i + 1,
        location: this.ReceivedData.location,
        landmark: this.ReceivedData.landmark,
        question: this.ReceivedData.questions[i].question,
        answerType:this.ReceivedData.questions[i].selectOption
      });
    }
  }

  checkboxLoop(e:any,i:any){
    let something = this.theAnswerForm as FormArray
    let answerControl = something.controls[i].get('answer') as FormArray
      if(e.checked){
        answerControl.push(new FormControl(e.source.value,Validators.required))
      } else {
        let i = 0;
        answerControl.controls.forEach((el:any)=> {
          if(el.value === e.source.value){
            answerControl.removeAt(i)
            return
          }
          i++
        })
      }
  }


  submit() {
    this.submitted = true
    let jsonFile = JSON.stringify(this.theAnswerForm.value);
    localStorage.setItem('Answers', jsonFile);
    // localStorage.clear()
  }



}
