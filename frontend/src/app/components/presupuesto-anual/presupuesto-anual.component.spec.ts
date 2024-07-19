import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoAnualComponent } from './presupuesto-anual.component';

describe('PresupuestoAnualComponent', () => {
  let component: PresupuestoAnualComponent;
  let fixture: ComponentFixture<PresupuestoAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
