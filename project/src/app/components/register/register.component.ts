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
      userNameReg: ['', [Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]],
      passwordReg: ['', [Validators.required,Validators.minLength(5) ]],
      email: ['', [Validators.required,Validators.email]],
      city: ['', [Validators.required,Validators.pattern("[a-zA-Z].*")]],
      state: ['', [Validators.required,Validators.pattern("[a-zA-Z].*")]]
    })
  }

  onRegister() {
    if (this.register.value.userNameReg &&
        this.register.value.passwordReg &&
        this.register.value.email &&
        this.register.value.city &&
        this.register.value.state ) {
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
    }else {
      alert("Please fill in all fields.");
    }


  }
  get userNameReg():FormControl {
    return this.register.get('userNameReg') as FormControl;
  }
  get passwordReg():FormControl {
    return this.register.get('passwordReg') as FormControl;
  }
  get email():FormControl {
    return this.register.get('email') as FormControl;
  }
  get city():FormControl {
    return this.register.get('city') as FormControl;
  }
  get state():FormControl {
    return this.register.get('state') as FormControl;
  }
}
