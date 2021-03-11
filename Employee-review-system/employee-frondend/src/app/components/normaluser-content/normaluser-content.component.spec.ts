import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaluserContentComponent } from './normaluser-content.component';

describe('NormaluserContentComponent', () => {
  let component: NormaluserContentComponent;
  let fixture: ComponentFixture<NormaluserContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaluserContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaluserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
