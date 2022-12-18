import { TestBed } from '@angular/core/testing';

import { DemoimageService } from './demoimage.service';

describe('DemoimageService', () => {
  let service: DemoimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
