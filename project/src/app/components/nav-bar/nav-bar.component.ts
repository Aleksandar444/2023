import { Component, Injectable, OnInit, inject } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent implements OnInit {

  constructor(private _dialog : MatDialog, private _empService:EmployeeService) { //deklarisanje servisa

  }
  ngOnInit(): void {
    this.getEmpList();
  }

  addEmp(){ // za otvaranje addEmp componente
    this._dialog.open(AddEmpComponent);
  }

  getEmpList(){ // metoda za prikupljanje podataka iz liste
    this._empService.getEmpList().subscribe({
      next:(res) => {
        console.log(res);
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

}
