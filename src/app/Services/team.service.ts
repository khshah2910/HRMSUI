import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Teams} from '../Entities/Teams';

@Injectable()
export class TeamService {
  private baseUrl = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<any> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map(
        (response) => {
          console.log(response);
          return response;
        }
      )
    );
  }
  createTeam(team: Teams): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, team);
  }
}
