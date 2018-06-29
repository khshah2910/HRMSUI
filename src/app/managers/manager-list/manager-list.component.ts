import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../Services/manager.service';
import {Managers} from '../../Entities/Managers';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  managers: Managers[];
  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.getManagers();
  }
  getManagers() {
    this.managerService.getManagers()
      .subscribe(
      (manager: any[]) => this.managers = manager,
      (error) => console.log(error)
      );
  }

}
