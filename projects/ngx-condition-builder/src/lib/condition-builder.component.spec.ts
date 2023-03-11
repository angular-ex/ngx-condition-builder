import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConditionBuilderComponent } from './condition-builder.component';

describe('NgxConditionBuilderComponent', () => {
  let component: NgxConditionBuilderComponent;
  let fixture: ComponentFixture<NgxConditionBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxConditionBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxConditionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
