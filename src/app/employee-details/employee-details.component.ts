import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  registerForm!: FormGroup;
  storeFile: any[] = [];
  pancard: string = '';
  companyName: string[] = ['Flipkard', 'Swigy', 'Dunzo', 'Mr. Right', 'Company', 'Zomato', 'Ola Cabs', 'Blinkit', 'Bigbasket', 'Amozon', 'Porter']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createforms()
  }

  createforms() {
    this.registerForm = this.fb.group({
      janadharNo: ['', Validators.required],
      employeeName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      adharNo: ['', [Validators.required, Validators.min(10)]],
      panNo: ['', Validators.required],
      age: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      district: ['', Validators.required],
      pancard: ['', Validators.required],
      workType: ['', Validators.required],
      empId: ['', Validators.required],
      companyname: new FormArray([], Validators.required),
      accountHolderName: ['', Validators.required],
      branchName: ['', Validators.required],
      ifscNo: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNo: ['', Validators.required],
      accept: ['', Validators.requiredTrue]
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log(this.storeFile);
    }
    this.registerForm.markAllAsTouched()
  }

  onChange(e: any) {
    const chechedValue = e.target.value;
    const check = e.target.checked;
    const checkedArray = this.registerForm.get('companyname') as FormArray;
    if (check) {
      checkedArray.push(new FormControl(chechedValue));
    } else {

      let i = 0;
      checkedArray.controls.forEach((item: any) => {
        if (item.value == chechedValue) {
          checkedArray.removeAt(i);
        }
        i++
      })
    }

  }



  getAdharFile(event: any) {
    this.uploadedFile(event)
  }
  getPanFile(event: any) {
    this.uploadedFile(event)
  }
  getCompanyFile(event: any) {
    this.uploadedFile(event)
  }
  getBankFile(event: any) {
    this.uploadedFile(event)
  }
  getAgreementFile(event: any) {
    this.uploadedFile(event)
  }
  uploadedFile(event: any) {
    // var reader = new FileReader();
    const file = event.target.files[0];
    this.storeFile.push(file);
  }

}
