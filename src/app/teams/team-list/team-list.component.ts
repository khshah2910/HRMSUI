import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Teams} from '../../Entities/Teams';
import {EmployeeListComponent} from '../../employees/employee-list/employee-list.component';
import {EmployeeService} from '../../employees/employeeService';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Teams[];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.loadTeams();
  }
  /*ngDoCheck() {
    //this.loadTeams();
  }*/

  loadTeams() {
    this.teamService.getTeams().subscribe(
      (team: any[]) => this.teams = team,
      (error) => console.log(error)
    );
  }

}
