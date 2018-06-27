import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Employee} from '../Entities/Employee';

@Injectable()
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`).pipe(map(
      (response) => {
        return response;
      }
    ));
  }
  /*
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }
   */
  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseUrl}/employee/register`, employee);
  }

  /*getTeams(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teams`).pipe(
      map(
        (response) => {
          console.log(response);
          return response;
        }
      )
    );
  }

  getManagers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manager`).pipe(
      map(
        (response) => {
          console.log(response);
          return response;
        }
      )
    );
  }*/

  /*

  private baseUrl = 'http://localhost:9000/api/customers';
  constructor(private http: HttpClient) {}
  getCustomer(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/find/${id}`, value);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getCustomersList(query = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
   */
}
