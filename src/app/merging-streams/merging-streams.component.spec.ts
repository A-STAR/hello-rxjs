import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergingStreamsComponent } from './merging-streams.component';

describe('MergingStreamsComponent', () => {
  let component: MergingStreamsComponent;
  let fixture: ComponentFixture<MergingStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergingStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergingStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
