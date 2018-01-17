import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingFunctionsComponent } from './mapping-functions.component';

describe('MappingFunctionsComponent', () => {
  let component: MappingFunctionsComponent;
  let fixture: ComponentFixture<MappingFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
