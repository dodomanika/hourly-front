import {Component, OnInit} from '@angular/core';
import {TimeRecord} from '../hours-list/hours-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeRecordDataService} from '../service/data/time-record-data.service';

@Component({
  selector: 'app-time-record',
  templateUrl: './time-record.component.html',
  styleUrls: ['./time-record.component.css']
})
export class TimeRecordComponent implements OnInit {

  record: TimeRecord;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private timeRecordService: TimeRecordDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.record = new TimeRecord(this.id, '', new Date(), null, null);

    this.timeRecordService.retrieveTimeRecord('domi', 0, this.id).subscribe(
      result => {
        if (result != null) {
          this.record = result;
        }
        console.log(result);
      }
    );
  }

  saveTimeRecord() {
    if (this.id === -1) {
      this.timeRecordService.postTimeRecord('domi', 0, this.record).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['hours']);
        }
      );
    } else {
      this.timeRecordService.putTimeRecord('domi', 0, this.id, this.record).subscribe(
        data => {
          console.log('update' + data);
          this.router.navigate(['hours']);
        }
      );
    }
  }

}
