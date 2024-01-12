import { TestBed } from '@angular/core/testing';

import { AutheticateServiceService } from './autheticate-service.service';

describe('AutheticateServiceService', () => {
  let service: AutheticateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheticateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
