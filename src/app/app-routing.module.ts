import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './employees/create-employee/create-employee.component';
import {TeamListComponent} from './teams/team-list/team-list.component';
import {ManagerListComponent} from './managers/manager-list/manager-list.component';
import {CreateTeamComponent} from './teams/create-team/create-team.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent , children: [
      {path: 'add', component: CreateEmployeeComponent}
    ]},
  { path: 'teams' , component: TeamListComponent, children : [
      {path: 'createTeam', component: CreateTeamComponent}
    ]},
  { path: 'managers' , component: ManagerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

