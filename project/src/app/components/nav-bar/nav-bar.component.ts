import { Component, Injectable, OnInit, inject, ViewChild } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { MainPageComponent } from '../main-page/main-page.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent implements OnInit {
  displayedColumns: string[] = ['id',
   'firstName',
    'lastName',
    'email',
    'date',
    'gender',
    'education',
    'company',
    'experience',
    'country'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatSort) sort: MatSort;

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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort =  this.sort;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

}
