import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeedetailsComponent } from './editemployeedetails.component';

describe('EditemployeedetailsComponent', () => {
  let component: EditemployeedetailsComponent;
  let fixture: ComponentFixture<EditemployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
