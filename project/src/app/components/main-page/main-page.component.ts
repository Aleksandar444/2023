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

  @ViewChild(MatSort) sort: MatSort;

  employees$: Observable<any[]>;

  constructor(private _empService: EmployeeService, private _dialog: MatDialog) { }
  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList() {
    // metoda za prikupljanje podataka iz liste

    //1. No "subscribe"
    //2. I have presented this on our last class, please read about how it works
    this.employees$ = this._empService.getEmpList();
    // this._empService.getEmpList().subscribe({
    //   next: (res) => {
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.sort = this.sort;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  deleteEmployee(id: number) { // metoda za brisanje Employee i njegovih podataka iz liste
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted');
        this.getEmpList();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  //1. I have updated this method, please read about how it works
  updateEmployee(data: any) {

    let dialogRef = this._dialog.open(AddEmpComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getEmpList();
    });


  }

}
