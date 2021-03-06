import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../Services/employeeService';
import {Employee} from '../../Entities/Employee';
import {Teams} from '../../Entities/Teams';
import {TeamService} from '../../Services/team.service';
import {Router} from '@angular/router';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';


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
  addEmployee(): void {
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
    /*alert('Employee Created successfully');*/
  }

  getTeams() {
     this.teamService.getTeams().subscribe(
      (team: any[]) => this.teams = team,
      (error) => console.log(error)
    );
  }


}
