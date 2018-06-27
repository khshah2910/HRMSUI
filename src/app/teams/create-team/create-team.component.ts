import { Component, OnInit } from '@angular/core';
import {Teams} from '../../Entities/Teams';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  team: Teams = new Teams();
  submitted: false;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addTeam(): void {
    this.submitted = false;
    this.team = new Teams();
  }
  save() {
    this.teamService.createTeam(this.team)
      .subscribe(data => console.log(data),
        (error) => console.log(error));
    this.team = new Teams();
  }
  onSubmit() {
    this.submitted = false;
    this.save();
  }

}
