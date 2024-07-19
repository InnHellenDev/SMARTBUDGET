import { TestBed } from '@angular/core/testing';

import { FuncionarioserviceService } from './funcionarioservice.service';

describe('FuncionarioserviceService', () => {
  let service: FuncionarioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
