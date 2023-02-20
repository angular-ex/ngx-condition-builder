import { TestBed } from '@angular/core/testing';

import { NgxConditionBuilderService } from './condition-builder.service';

describe('NgxConditionBuilderService', () => {
  let service: NgxConditionBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConditionBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
