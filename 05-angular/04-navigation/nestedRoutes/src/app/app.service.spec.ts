import { TestBed } from '@angular/core/testing';

import { YService } from './app.service';

describe('YService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YService = TestBed.get(YService);
    expect(service).toBeTruthy();
  });
});
