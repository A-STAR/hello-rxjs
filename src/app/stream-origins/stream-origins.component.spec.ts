import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamOriginsComponent } from './stream-origins.component';

describe('StreamOriginsComponent', () => {
  let component: StreamOriginsComponent;
  let fixture: ComponentFixture<StreamOriginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamOriginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamOriginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
