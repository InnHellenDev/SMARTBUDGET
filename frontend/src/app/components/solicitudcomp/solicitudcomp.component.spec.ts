import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudcompComponent } from './solicitudcomp.component';

describe('SolicitudcompComponent', () => {
  let component: SolicitudcompComponent;
  let fixture: ComponentFixture<SolicitudcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
