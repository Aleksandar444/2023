import {
  Component,
  OnInit,
  ViewChild,
  inject,
  Injectable,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmpComponent } from '../add-emp/add-emp.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
@Injectable()
export class MainPageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'date',
    'gender',
    'education',
    'company',
    'experience',
    'country',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _empService: EmployeeService,private _dialog : MatDialog) {}
  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList() {
    // metoda za prikupljanje podataka iz liste
    this._empService.getEmpList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteEmployee(id:number){ // metoda za brisanje Employee i njegovih podataka iz liste
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted');
        this.getEmpList();
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  updateEmployee(data : any) {
    this._dialog.open(AddEmpComponent, {data})
  }

}
