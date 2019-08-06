import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../service/data/task-data.service';
import {Router} from '@angular/router';

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

  constructor(
    private taskService: TaskDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.taskService.retrieveTasks().subscribe(
      response => {
        console.log(response);
        this.tasks = response;
      }
    );
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(
      response => {
        console.log(response);
        this.refreshTasks();
      }
    );
  }

  addTask() {
    this.router.navigate(['tasks', -1]);
  }

  updateTask(id) {
    this.router.navigate(['tasks', id]);

  }

}
