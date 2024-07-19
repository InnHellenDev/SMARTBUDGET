import { TestBed } from '@angular/core/testing';

import { SolicitudserviceService } from './solicitudservice.service';

describe('SolicitudserviceService', () => {
  let service: SolicitudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
