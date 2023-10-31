import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  public register : FormGroup<any>;
  constructor( private router : Router, private formBuilder: FormBuilder, private http:HttpClient){

  }
ngOnInit(): void {
  // bindovanje input polja u Register formi
  this.register = this.formBuilder.group({
    userNameReg:[''],
    passwordReg:[''],
    email:[''],
    city:[''],
    state:['']
  })
}

  onRegister(){
    debugger
    //na dugme register - salje se http post request i beleze se podaci o registrovanom korisniku

    //1. No data validation
    //2. http needs to be in a service, not called from component directly  
    this.http.post<any>("http://localhost:3000/registredEmployees", this.register.value).subscribe({
      next: (res) => {
        alert("Successfull registration!");
        this.router.navigate['login'];
      },
      error:(err) =>{
        alert("Oops, something went wrong!");
      }
    })
  }
}
