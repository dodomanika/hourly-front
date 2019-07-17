import {Component, OnInit} from '@angular/core';
import {TimeRecordDataService} from '../service/data/time-record-data.service';

export class TimeRecord {
  constructor(
    public id: number,
    public task: string,
    public date: Date,
    public startTime: Date,
    public time: Date
  ) {

  }
}

@Component({
  selector: 'app-hours-list',
  templateUrl: './hours-list.component.html',
  styleUrls: ['./hours-list.component.css']
})
export class HoursListComponent implements OnInit {

  timeRecords: TimeRecord[];
  /* =
    [
      new TimeRecord(1, 'Reservations Functionnality', new Date(), new Date(), new Date())
    ]
  ;*/

  constructor(
    private timeRecordService: TimeRecordDataService
  ) {
  }

  ngOnInit() {
    this.refreshTimeRecords();
  }

  refreshTimeRecords() {
    this.timeRecordService.retrieveAllTimeRecords('domi', 0).subscribe(
      response => {
        console.log(response);
        this.timeRecords = response;
      }
    );
  }

  deleteTimeRecord(id) {
    this.timeRecordService.deleteTimeRecord('domi', 0, id).subscribe(
      response => {
        console.log(response);
        this.refreshTimeRecords();
      }
    );
  }

}
