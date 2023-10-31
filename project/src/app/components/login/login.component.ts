import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup<any>;

  constructor(private router :Router,private http: HttpClient){

  }
  ngOnInit(): void {
    this.login = new FormGroup({
      'userName' : new FormControl,
      'password' :new FormControl
    })
  }
  onLogin(){

    //1. http needs to be in a service, not called from component directly
    this.http.get<any>("http://localhost:3000/registredEmployees").subscribe(res=>{

    //2. check for user needs to done by checking does user exists in a database
    //   not getting all users and try to find it in the list of users
      const user = res.find((val:any) => {
        return val.userNameReg === this.login.value.userName && val.passwordReg === this.login.value.password
      });
      if (user){
        alert("Login success!");
        this.login.reset();
        this.router.navigate(['/main-page']);
      }
      else {
        alert ("User not found! Try to register first!" );
      }
    })

  }
}
