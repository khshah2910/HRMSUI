import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class ManagerService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getManagers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manager`).pipe(
      map(
        (response) => {
          console.log(response);
          return response;
        }
      )
    );
  }
}
