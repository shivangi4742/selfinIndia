import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfinComponent } from './selfin.component';

describe('SelfinComponent', () => {
  let component: SelfinComponent;
  let fixture: ComponentFixture<SelfinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
