import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacompComponent } from './reservacomp.component';

describe('ReservacompComponent', () => {
  let component: ReservacompComponent;
  let fixture: ComponentFixture<ReservacompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
