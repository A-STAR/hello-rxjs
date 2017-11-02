import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSequenceComponent } from './basic-sequence.component';

describe('BasicSequenceComponent', () => {
  let component: BasicSequenceComponent;
  let fixture: ComponentFixture<BasicSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
