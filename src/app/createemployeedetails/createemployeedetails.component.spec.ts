import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeedetailsComponent } from './createemployeedetails.component';

describe('CreateemployeedetailsComponent', () => {
  let component: CreateemployeedetailsComponent;
  let fixture: ComponentFixture<CreateemployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
