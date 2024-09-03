import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  myForm!: FormGroup;
  storeData: any;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this.storeData = this.myForm.value;
   // console.log(this.storeData);
  }

}
