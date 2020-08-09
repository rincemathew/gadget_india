import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDesignComponent } from './top-design.component';

describe('TopDesignComponent', () => {
  let component: TopDesignComponent;
  let fixture: ComponentFixture<TopDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
