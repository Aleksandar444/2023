import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  empForm : FormGroup;

  education : string[] = [ //niz stringova za zeljeni stepen strucne spreme
    'Elementary Education',
    'Secondary Education',
    'Vocational Training',
    'Bachelors Degree',
    'Masters Degree',
    'Doctorate (PhD)'
  ];

  constructor(private _formBuilder : FormBuilder){ //servis _formBuilder , bindovanje vrednosti sa input poljima
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

  onRegister(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }

}


