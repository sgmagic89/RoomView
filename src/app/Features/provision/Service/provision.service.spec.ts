/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProvisionService } from './provision.service';

describe('Service: Provision', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvisionService]
    });
  });

  it('should ...', inject([ProvisionService], (service: ProvisionService) => {
    expect(service).toBeTruthy();
  }));
});