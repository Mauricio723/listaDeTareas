import { TestBed } from '@angular/core/testing';

import { IntareaService } from './intarea.service';

describe('IntareaService', () => {
  let service: IntareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
