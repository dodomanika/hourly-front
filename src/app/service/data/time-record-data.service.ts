import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TimeRecord} from '../../hours-list/hours-list.component';

@Injectable({
  providedIn: 'root'
})
export class TimeRecordDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllTimeRecords(username, date) {
    return this.http.get<TimeRecord[]>(`http://localhost:8080/users/${username}/dates/${date}/records`);
  }

  deleteTimeRecord(username, date, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/dates/${date}/records/${id}`);
  }
}
