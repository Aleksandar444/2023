import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup<any>;

  constructor(private router :Router,private http: HttpClient, private _empSevice : EmployeeService){

  }
  ngOnInit(): void {
    this.login = new FormGroup({
      'userName' : new FormControl,
      'password' :new FormControl
    })
  }
  onLogin(){
    this._empSevice.getRegistredEmployee().subscribe(res=>{
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
