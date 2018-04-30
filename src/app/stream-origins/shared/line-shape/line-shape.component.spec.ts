import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineShapeComponent } from './line-shape.component';

describe('LineShapeComponent', () => {
  let component: LineShapeComponent;
  let fixture: ComponentFixture<LineShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
