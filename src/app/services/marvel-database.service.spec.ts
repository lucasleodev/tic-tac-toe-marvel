import { TestBed } from '@angular/core/testing';

import { MarvelDatabaseService } from './marvel-database.service';

describe('MarvelDatabaseService', () => {
  let service: MarvelDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
