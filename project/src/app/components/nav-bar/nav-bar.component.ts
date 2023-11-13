import { Component, Injectable, OnInit, inject, ViewChild } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { MainPageComponent } from '../main-page/main-page.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent   {



  constructor(private _dialog : MatDialog,private _empService : EmployeeService, ) { //

  }


  addEmp(){ // za otvaranje addEmp componente
    const dialogRef = this._dialog.open(AddEmpComponent);

    dialogRef.afterClosed().subscribe({
      next:(res) =>{
        if(res){
          this._empService.getEmpList();
        }
      },
      error: (err) => {
        alert("some error");
      }
    })
  }



}
