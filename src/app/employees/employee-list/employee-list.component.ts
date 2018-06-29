import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {EmployeeService} from '../../Services/employeeService';
import {Employee} from '../../Entities/Employee';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  employee: Employee;
  employees: Employee[];
  firstName: string;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  ngOnChanges() {
    this.loadData();
  }
 /* ngDoCheck() {
    this.loadData();
  }*/
  loadData() {
    this.employeeService.getEmployees().subscribe(
      (employees: any[]) => this.employees = employees,
      (error) => console.log(error)
    );
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log( data + '\n' + id + ' Removed! ');
        alert('Employee with id' + id + ' removed! ');
        this.loadData();
      },
      (error) => console.log(error)
    );
  }
  searchEmployee() {
    console.log(this.firstName);
    this.employeeService.findEmployeeByName(this.firstName, this.employees).subscribe(
          (employees: any[]) => {
            this.employees = employees;
          console.log(employees);
        },
      (error) => console.log(error)
    );
  }
  sortByRole() {
    console.log('method works');
  }
}
