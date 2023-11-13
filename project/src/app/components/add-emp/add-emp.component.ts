import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { Inject } from '@angular/core';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {

  empForm: FormGroup;

  education: string[] = [ //niz stringova za zeljeni stepen strucne spreme
    'Elementary Education',
    'Secondary Education',
    'Vocational Training',
    'Bachelors Degree',
    'Masters Degree',
    'Doctorate (PhD)'
  ];

  constructor(private _formBuilder: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<AddEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { //servis _formBuilder , bindovanje vrednosti sa input poljima
    this.empForm = this._formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(4)]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      date: ['',[Validators.required]],
      gender: ['',Validators.required],
      education: ['',[Validators.required]],
      company: ['',[Validators.required]],
      experience: ['',[Validators.required]],
      country: ['',[Validators.required]]
    })
  };
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onRegister() { // dodavanje novog employee u Listu
    if (this.empForm.valid) {// proveravanje da li je empForm validna
      if(this.data){ // ako employe vec ima data ulazi se u petlju gde se menjaju njegovi podaci
        this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (res : any) => {
            alert("Employee detail updated");
            this._dialogRef.close();
          },
          error:(err) => {
            alert("error");
          }
        })
      }else {
        this._empService.addEmployee(this.empForm.value,).subscribe({ //ako je validna poziva se empService za dodavanje novog employee
          next: (val: any) => {
            alert('Employee added successfully!');
            this._dialogRef.close();
            this._empService.getEmpList();//  !!ne radi!!
          },
          error: (error: any) => {
            console.error(error);
          }
        })
    }
    }

  }
  onCancel(){
    this._dialogRef.close();
  }

  get firstName() {
    return this.empForm.get('firstName') ;
  }
  get lastName() {
    return this.empForm.get('lastName') ;
  }
  get email() {
    return this.empForm.get('email') ;
  }
  get date() {
    return this.empForm.get('date') ;
  }
  get gender() {
    return this.empForm.get('gender') ;
  }
  get company() {
    return this.empForm.get('company') ;
  }
  get experience() {
    return this.empForm.get('experience') ;
  }
  get country() {
    return this.empForm.get('country') ;
  }
}




