import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup<any>;

  constructor(){

  }
  ngOnInit(): void {
    this.login = new FormGroup({
      'userName' : new FormControl,
      'password' :new FormControl
    })
  }
  onLogin(){
    alert("works");
    console.log(this.login.value);
  }
}
