import { Component, Injectable, inject } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent {

  constructor(private _dialog : MatDialog) { //servis _dialog za pozivanje matDialog

  }

  addEmp(){
    this._dialog.open(AddEmpComponent);
  }

}
