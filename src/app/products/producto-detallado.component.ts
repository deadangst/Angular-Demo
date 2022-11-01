import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from './product';
import { ProductService } from './product.service';

@Component({
  
  templateUrl: './producto-detallado.component.html',
  styleUrls: ['./producto-detallado.component.css']
})
export class ProductoDetalladoComponent implements OnInit {
  tituloPagina: string = 'Detalle del Producto';
  errorMessage = '';
  producto: IProducto | undefined;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) {                 
              }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.tituloPagina +=`: ${id}`
    if(id){
    this.obtenerProducto(id);
    }
  }

  obtenerProducto(id: number): void {
    this.productService.getProducto(id).subscribe({
      next: producto => this.producto = producto,
      error: err => this.errorMessage = err
    });
  }

  regresarMetodo():void{
    this.router.navigate(['/products']);
  }
}
