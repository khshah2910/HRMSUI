import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employeeService';
import {Employee} from '../../Entities/Employee';
import {Teams} from '../../Entities/Teams';
import {TeamService} from '../../teams/team.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {EmployeeListComponent} from '../employee-list/employee-list.component';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  teams: Teams[];
  constructor(private employeeService: EmployeeService,
              private teamService: TeamService,
              private router: Router,
              private  employeeListCompoenent: EmployeeListComponent) { }

  ngOnInit() {
    console.log(this.getTeams());
  }
  addCustomer(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        this.router.navigate(['employees']);
        console.log(data);
        this.employeeListCompoenent.loadData();
        },
        (error) => console.log(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  getTeams() {
     this.teamService.getTeams().subscribe(
      (team: any[]) => this.teams = team,
      (error) => console.log(error)
    );
  }


}
