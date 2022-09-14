import { TestBed } from '@angular/core/testing';

import { VehinclesService } from './vehincles.service';

describe('VehinclesService', () => {
  let service: VehinclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehinclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
