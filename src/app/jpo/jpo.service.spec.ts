import { TestBed } from '@angular/core/testing';

import { JpoService } from './jpo.service';

describe('JpoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JpoService = TestBed.get(JpoService);
    expect(service).toBeTruthy();
  });
});
