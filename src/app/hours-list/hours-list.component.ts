import {Component, OnInit} from '@angular/core';
import {TimeRecordDataService} from '../service/data/time-record-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

export class TimeRecord {
  constructor(
    public id: number,
    public task: string,
    public startTime: string,
    public duration: number
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

  date: moment.Moment;
  dateIndex: number;

  constructor(
    private timeRecordService: TimeRecordDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.refreshTimeRecords();

    this.route.params.subscribe(params => {
      this.refreshTimeRecords();
    });
  }

  refreshTimeRecords() {
    this.dateIndex = <number>this.route.snapshot.params['dateIndex'];
    this.date = moment(new Date()).add(this.dateIndex, 'days');

    this.timeRecordService.retrieveAllTimeRecords('domi', this.dateIndex).subscribe(
      response => {
        console.log(response);
        this.timeRecords = response;
      }
    );
  }

  deleteTimeRecord(id) {
    this.timeRecordService.deleteTimeRecord('domi', this.dateIndex, id).subscribe(
      response => {
        console.log(response);
        this.refreshTimeRecords();
      }
    );
  }

  addTimeRecord() {
    this.router.navigate(['hours', this.dateIndex, -1]);
  }

  updateTimeRecord(id) {
    console.log(`update todo ${id}`);

    this.router.navigate(['hours', this.dateIndex, id]);

  }

  previous() {
    this.dateIndex--;
    console.log(this.dateIndex);
    this.router.navigate(['hours', this.dateIndex]);
  }

  next() {
    this.dateIndex++;
    console.log(this.dateIndex);
    this.router.navigate(['hours', this.dateIndex]);
  }

}
