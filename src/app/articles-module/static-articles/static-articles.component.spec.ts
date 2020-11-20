import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticArticlesComponent } from './static-articles.component';

describe('StaticArticlesComponent', () => {
  let component: StaticArticlesComponent;
  let fixture: ComponentFixture<StaticArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
