import {Component, OnInit} from '@angular/core';
import {Time} from '@angular/common';

export class TimeRecord {
  constructor(
    public id: number,
    public task: string,
    public project: string,
    public date: Date,
    public time: Time,
    public startTime: Time,
    public endTime: Time
  ) {

  }
}

@Component({
  selector: 'app-hours-list',
  templateUrl: './hours-list.component.html',
  styleUrls: ['./hours-list.component.css']
})
export class HoursListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
