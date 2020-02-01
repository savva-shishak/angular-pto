import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrefsComponent } from './hrefs.component';

describe('HrefsComponent', () => {
  let component: HrefsComponent;
  let fixture: ComponentFixture<HrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
