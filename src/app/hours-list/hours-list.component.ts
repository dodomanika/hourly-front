import {Component, OnInit} from '@angular/core';

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

  timeRecords: TimeRecord[] =
    [
      new TimeRecord(1, 'Reservations Functionnality', new Date(), new Date(), new Date())
    ]
  ;

  constructor() {
  }

  ngOnInit() {
  }

}
