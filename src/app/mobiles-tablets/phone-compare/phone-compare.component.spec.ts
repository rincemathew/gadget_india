import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCompareComponent } from './phone-compare.component';

describe('PhoneCompareComponent', () => {
  let component: PhoneCompareComponent;
  let fixture: ComponentFixture<PhoneCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
