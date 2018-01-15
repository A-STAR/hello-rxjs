import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainingStateComponent } from './maintaining-state.component';

describe('MaintainingStateComponent', () => {
  let component: MaintainingStateComponent;
  let fixture: ComponentFixture<MaintainingStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainingStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
