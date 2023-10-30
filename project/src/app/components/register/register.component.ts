import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  register : FormGroup<any>;
  constructor( private router : Router){

  }
ngOnInit(): void {
  this.register = new FormGroup({
    'userNameReg' : new FormControl,
    'passwordReg' : new FormControl,
    'email' : new FormControl,
    'city': new FormControl,
    'state' : new FormControl
  })
}

  onRegister(){
    alert("Register works");
    console.log(this.register.value);
    this.router.navigate(['']);
  }
}
