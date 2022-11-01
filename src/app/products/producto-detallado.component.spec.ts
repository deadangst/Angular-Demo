import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalladoComponent } from './producto-detallado.component';

describe('ProductoDetalladoComponent', () => {
  let component: ProductoDetalladoComponent;
  let fixture: ComponentFixture<ProductoDetalladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetalladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
