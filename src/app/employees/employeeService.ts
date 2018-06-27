import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Employee} from '../Entities/Employee';

@Injectable()
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`).
    pipe(map
    (
      (response) => {
        return response;
      }
    ));
  }
  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, employee);
  }
  findEmployeeByName(name: string, value: any): Observable<Object> {
    return this.http.get(`${this.baseUrl}/findByName/${name}`, value);
  }
  deleteEmployee(id:  number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/remove/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
}
