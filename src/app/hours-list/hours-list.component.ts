import {Component, OnInit} from '@angular/core';
import {TimeRecordDataService} from '../service/data/time-record-data.service';
import {Router} from '@angular/router';

export class TimeRecord {
  constructor(
    public id: number,
    public task: string,
    public date: Date,
    public startTime: Date,
    public time: number
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
    private timeRecordService: TimeRecordDataService,
    private route: Router
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

  addTimeRecord() {
    this.route.navigate(['hours', -1]);
  }

  updateTimeRecord(id) {
    console.log(`update todo ${id}`);

    this.route.navigate(['hours', id]);

  }

}
