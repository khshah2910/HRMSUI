import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import { EmployeeService } from './Services/employeeService';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import {TeamService} from './Services/team.service';
import { ManagerListComponent } from './managers/manager-list/manager-list.component';
import {ManagerService} from './Services/manager.service';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    TeamListComponent,
    ManagerListComponent,
    CreateTeamComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EmployeeService, TeamService, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
