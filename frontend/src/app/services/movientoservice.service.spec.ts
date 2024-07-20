import { TestBed } from '@angular/core/testing';

import { MovimientoserviceService } from './movimientoservice.service';

describe('MovimientoserviceService', () => {
  let service: MovimientoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
