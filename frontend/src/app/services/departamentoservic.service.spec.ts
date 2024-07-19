import { TestBed } from '@angular/core/testing';

import { DepartamentoservicService } from './departamentoservic.service';

describe('DepartamentoservicService', () => {
  let service: DepartamentoservicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentoservicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
