import { TestBed } from '@angular/core/testing';

import { TimeRecordDataService } from './time-record-data.service';

describe('TimeRecordDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeRecordDataService = TestBed.get(TimeRecordDataService);
    expect(service).toBeTruthy();
  });
});
