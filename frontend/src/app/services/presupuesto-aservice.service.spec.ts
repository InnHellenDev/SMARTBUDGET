import { TestBed } from '@angular/core/testing';

import { PresupuestoAserviceService } from './presupuesto-aservice.service';

describe('PresupuestoAserviceService', () => {
  let service: PresupuestoAserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupuestoAserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
