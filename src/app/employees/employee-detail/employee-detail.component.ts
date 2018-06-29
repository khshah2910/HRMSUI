import {Component, OnChanges, OnInit} from '@angular/core';
import {Employee} from '../../Entities/Employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EmployeeService} from '../../Services/employeeService';
import {TeamService} from '../../Services/team.service';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {Teams} from '../../Entities/Teams';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  teams: Teams[];
  employeeId: number;
  foundEmployee: Employee = this.findEmployee();

  constructor(private employeeService: EmployeeService,
              private teamService: TeamService,
              private router: Router,
              private  employeeListComponent: EmployeeListComponent,
              private  activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('first Method-----------------------');
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.employeeId = +param['id'];
        console.log('------<>>>>>>' + this.employeeId);
      },
      (error) => console.log(error)
    );
    this.employeeService.findEmployeeById(this.employeeId, this.foundEmployee)
      .subscribe(
        (employee: any) => {
          this.employee = employee;
          console.log(this.employee);
        },
        (error) => console.log(error),
      );
  }
  update() {
    this.employeeService.updateEmployee(this.employeeId, this.employee)
      .subscribe(data => {
          this.router.navigate(['employees']);
          console.log(data);
          this.employeeListComponent.loadData();
        },
        (error) => console.log(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.submitted = true;
    this.update();
  }
  findEmployee() {
    return this.employee;
  }
}
