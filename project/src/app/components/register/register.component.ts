import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { passwordValidator } from './passwordValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register: FormGroup<any>;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _empService: EmployeeService) {

  }
  ngOnInit(): void {
    // bindovanje input polja u Register formi
    this.register = this.formBuilder.group({
      userNameReg: [''],
      passwordReg: ['', [Validators.required, passwordValidator()]],
      email: [''],
      city: [''],
      state: ['']
    })
  }

  onRegister() {
    //na dugme register - salje se http post request i beleze se podaci o registrovanom korisniku
    this._empService.newRegisterEmployee(this.register.value).subscribe({
      next: (res) => {
        alert("Successfull registration!");
        this.router.navigate(['/login']);

      },
      error: (err) => {
        alert("Oops, something went wrong!");
      }
    })


  }
}
