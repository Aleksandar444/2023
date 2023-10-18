import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  education : string[] = [ //niz stringova za zeljeni stepen strucne spreme
    'Elementary Education',
    'Secondary Education',
    'Vocational Training',
    'Bachelors Degree',
    'Masters Degree',
    'Doctorate (PhD)'
  ]

}


