import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentocompComponent } from './departamentocomp.component';

describe('DepartamentocompComponent', () => {
  let component: DepartamentocompComponent;
  let fixture: ComponentFixture<DepartamentocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
