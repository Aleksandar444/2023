import { Component, OnInit, ViewChild,inject,Injectable } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
@Injectable()
export class MainPageComponent implements OnInit {

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

  constructor( private _empService:EmployeeService){

  }
  ngOnInit(): void {
    this.getEmpList();
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
