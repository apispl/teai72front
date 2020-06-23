import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisComponent } from './main-dis.component';

describe('MainDisComponent', () => {
  let component: MainDisComponent;
  let fixture: ComponentFixture<MainDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
