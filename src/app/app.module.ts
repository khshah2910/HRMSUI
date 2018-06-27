import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employees/employeeService';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import {AppRoutingModule} from './app-routing.module';
import { TeamListComponent } from './teams/team-list/team-list.component';
import {TeamService} from './teams/team.service';
import { ManagerListComponent } from './managers/manager-list/manager-list.component';
import {ManagerService} from './managers/manager.service';
import {FormsModule} from '@angular/forms';
import { CreateTeamComponent } from './teams/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    TeamListComponent,
    ManagerListComponent,
    CreateTeamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, TeamService, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
