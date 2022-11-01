import { TestBed } from '@angular/core/testing';

import { ProductoDetalladoGuard } from './producto-detallado.guard';

describe('ProductoDetalladoGuard', () => {
  let guard: ProductoDetalladoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductoDetalladoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
