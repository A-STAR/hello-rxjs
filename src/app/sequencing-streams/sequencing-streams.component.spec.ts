import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencingStreamsComponent } from './sequencing-streams.component';

describe('SequencingStreamsComponent', () => {
  let component: SequencingStreamsComponent;
  let fixture: ComponentFixture<SequencingStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencingStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencingStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
