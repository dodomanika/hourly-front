import {Component, OnInit} from '@angular/core';
import {Task} from '../task-manage/task-manage.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskDataService} from '../service/data/task-data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.task = new Task(this.id, '', '');

    this.taskService.retrieveTask(this.id).subscribe(
      result => {
        if (result != null) {
          this.task = result;
        }
        console.log(result);
      }
    );
  }

  saveTask() {
    if (this.id === -1) {
      this.taskService.postTask(this.task).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['tasks']);
        }
      );
    } else {
      this.taskService.putTask(this.id, this.task).subscribe(
        data => {
          console.log('update' + data);
          this.router.navigate(['tasks']);
        }
      );
    }
  }

}
