import { Component, Injectable, OnInit, inject, ViewChild } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent   {



  constructor(private _dialog : MatDialog, ) { //

  }


  addEmp(){ // za otvaranje addEmp componente
    this._dialog.open(AddEmpComponent);
  }



}
