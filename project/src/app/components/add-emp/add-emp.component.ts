import { DialogRef } from '@angular/cdk/dialog';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {

  empForm : FormGroup;

  education : string[] = [ //niz stringova za zeljeni stepen strucne spreme
    'Elementary Education',
    'Secondary Education',
    'Vocational Training',
    'Bachelors Degree',
    'Masters Degree',
    'Doctorate (PhD)'
  ];

  constructor(private _formBuilder : FormBuilder,
    private _empService : EmployeeService,
    private _dialogRef:DialogRef<AddEmpComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
    ){ //servis _formBuilder , bindovanje vrednosti sa input poljima
    this.empForm = this._formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      gender: '',
      education: '',
      company: '',
      experience:'',
      country:''
    })
  };
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onRegister(){
    if(this.empForm.valid){ // proveravanje da li je empForm validna
     this._empService.addEmployee(this.empForm.value,).subscribe({ //ako je validna poziva se empService za dodavanje novog employee
      next: (val: any) => {
        alert('Employee added successfully!');
        this._dialogRef.close();
        this._empService.getEmpList();//  !!ne radi!!
      },
      error: (error : any) =>{
        console.error(error);
      }
     })

    }
  }
  onCancel(){
    this._dialogRef.close();
  }
}


