import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocompComponent } from './registrocomp.component';

describe('RegistrocompComponent', () => {
  let component: RegistrocompComponent;
  let fixture: ComponentFixture<RegistrocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
