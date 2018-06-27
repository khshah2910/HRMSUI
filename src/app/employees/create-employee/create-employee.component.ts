import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employeeService';
import {Employee} from '../../Entities/Employee';
import {Teams} from '../../Entities/Teams';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  teams: Teams[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  addCustomer(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data),
        (error) => console.log(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
