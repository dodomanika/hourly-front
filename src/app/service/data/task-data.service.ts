import { Injectable } from '@angular/core';
import {API_URL} from '../../app.constants';
import {HttpClient} from '@angular/common/http';
import {Task} from '../../task-manage/task-manage.component';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveTasks() {
    return this.http.get<Task[]>(`${API_URL}/tasks`);
  }

  deleteTask(id) {
    return this.http.delete(`${API_URL}/tasks/${id}`);
  }

  retrieveTask(id) {
    return this.http.get<Task>(`${API_URL}/tasks/${id}`);
  }

  postTask(task) {
    return this.http.post(`${API_URL}/tasks`, task);
  }

  putTask(id, task) {
    return this.http.put(`${API_URL}/tasks/${id}`, task);

  }
}
