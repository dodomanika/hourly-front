import {Component, OnInit} from '@angular/core';
import {TimeRecordDataService} from '../service/data/time-record-data.service';
import {ActivatedRoute, Router} from '@angular/router';

export class TimeRecord {
  constructor(
    public id: number,
    public task: string,
    public date: Date,
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
  date: Date = new Date();

  dateIndex = 0;

  /* =
    [
      new TimeRecord(1, 'Reservations Functionnality', new Date(), new Date(), new Date())
    ]
  ;*/

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
