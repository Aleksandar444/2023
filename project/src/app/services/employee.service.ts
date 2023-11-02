import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { //kreiran http servis http client

  }
  addEmployee(data) : Observable<any>{   //metoda u servisu koja ce pomocu POST metode dodavati svakog employee
    return this._http.post('http://localhost:3000/employees', data);   // metoda vraca observable response
  }

  getEmpList() : Observable<any>{ // servis za fetch data iz Emloyee List
    return this._http.get<any[]>('http://localhost:3000/employees');   // metoda vraca observable response
  }

  deleteEmployee(id: number) : Observable<any>{ // servis za brisanje employee iz liste
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: number,data:any) : Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }
  getRegistredEmployee() : Observable<any> { // servis za fetch data iz registredEmployees
    return this._http.get<any>('http://localhost:3000/registredEmployees');
  }

  newRegisterEmployee(data) : Observable<any>{ // servis za ubacivanje newRegisterEmployee
    return this._http.post('http://localhost:3000/registredEmployees',data);
  }

}
