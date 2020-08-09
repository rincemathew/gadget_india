import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDesignComponent } from './bottom-design.component';

describe('BottomDesignComponent', () => {
  let component: BottomDesignComponent;
  let fixture: ComponentFixture<BottomDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
