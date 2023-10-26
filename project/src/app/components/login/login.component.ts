import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  empForm : FormGroup;
  username : string;
  password : string;
  constructor(){

  }
  submitForm(){
    alert("Welcome");
    console.log('Username is : ' + this.username);
    console.log('Password is : ' + this.password);
  }
}
