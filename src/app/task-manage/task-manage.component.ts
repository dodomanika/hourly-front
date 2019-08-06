import {Component, OnInit} from '@angular/core';

export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {
  }
}

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.css']
})
export class TaskManageComponent implements OnInit {

  tasks: Task[];

  constructor() {
  }

  ngOnInit() {
  }

}
