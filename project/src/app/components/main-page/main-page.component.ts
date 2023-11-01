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
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { Observable } from 'rxjs';
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
  employees$: Observable<any[]>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _empService: EmployeeService,private _dialog : MatDialog) {}
  ngOnInit(): void {
    this.getEmpList();

  }
  getEmpList() {
    // metoda za prikupljanje podataka iz liste
    this.employees$ = this._empService.getEmpList();
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


  updateEmployee(data) {
    let dialoRef=this._dialog.open(AddEmpComponent, {data});
    dialoRef.afterClosed().subscribe(updatedEmployee  =>{
      if(updatedEmployee) {
        this._empService.updateEmployee(updatedEmployee).subscribe(res =>{
          console.log('Employee edited:', res);
          this.getEmpList();
        })
      }
    })
  }

}
