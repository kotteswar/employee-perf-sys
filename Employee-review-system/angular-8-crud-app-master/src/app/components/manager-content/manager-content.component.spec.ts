import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerContentComponent } from './manager-content.component';

describe('ManagerContentComponent', () => {
  let component: ManagerContentComponent;
  let fixture: ComponentFixture<ManagerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
