import { TestBed, async, inject } from '@angular/core/testing';

import { LoginRoutingGuardGuard } from './login-routing-guard.guard';

describe('LoginRoutingGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRoutingGuardGuard]
    });
  });

  it('should ...', inject([LoginRoutingGuardGuard], (guard: LoginRoutingGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
