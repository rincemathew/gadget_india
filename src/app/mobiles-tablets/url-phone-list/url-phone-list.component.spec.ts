import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPhoneListComponent } from './url-phone-list.component';

describe('UrlPhoneListComponent', () => {
  let component: UrlPhoneListComponent;
  let fixture: ComponentFixture<UrlPhoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlPhoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlPhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
