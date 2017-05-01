import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  defaultQuestion = 'teacher';
  answer = '';

  // onSubmit(form: HTMLFormElement){
  //   //console.log('On Submitted');
  //   console.log(form);
  // }


  // onSubmit(form: NgForm){
  //   //console.log('On Submitted');
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }  

}
