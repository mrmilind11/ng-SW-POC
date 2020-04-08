import { TestBed } from '@angular/core/testing';

import { ServiceWorkerUtilityService } from './service-worker-utility.service';

describe('ServiceWorkerUtilityService', () => {
  let service: ServiceWorkerUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkerUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
