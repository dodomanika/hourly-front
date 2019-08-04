import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TimeRecord} from '../../hours-list/hours-list.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TimeRecordDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllTimeRecords(username, date) {
    /*const basicAuthHeaderString = this.createBasicHttpHeader();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });*/

    return this.http.get<TimeRecord[]>(`${API_URL}/users/${username}/dates/${date}/records`,
      /*{headers}*/);
  }

  deleteTimeRecord(username, date, id) {
    return this.http.delete(`${API_URL}/users/${username}/dates/${date}/records/${id}`);
  }

  retrieveTimeRecord(username, date, id) {
    return this.http.get<TimeRecord>(`${API_URL}/users/${username}/dates/${date}/records/${id}`);
  }

  postTimeRecord(username, date, timeRecord) {
    return this.http.post(`${API_URL}/users/${username}/dates/${date}/records`, timeRecord);
  }

  putTimeRecord(username, date, id, timeRecord) {
    return this.http.put(`${API_URL}/users/${username}/dates/${date}/records/${id}`, timeRecord);

  }

  createBasicHttpHeader() {
    const username = 'in28minutes';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
