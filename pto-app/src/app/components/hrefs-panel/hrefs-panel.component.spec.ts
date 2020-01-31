import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrefsPanelComponent } from './hrefs-panel.component';

describe('HrefsPanelComponent', () => {
  let component: HrefsPanelComponent;
  let fixture: ComponentFixture<HrefsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrefsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrefsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
