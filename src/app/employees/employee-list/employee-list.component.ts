import {Component, OnChanges, OnInit} from '@angular/core';
import {EmployeeService} from '../employeeService';
import {Employee} from '../../Entities/Employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadData();
  }
  ngOnChanges() {
    this.loadData();
  }
  loadData() {
    this.employeeService.getEmployees().subscribe(
      (employees: any[]) => this.employees = employees,
      (error) => console.log(error)
    );
  }

}
