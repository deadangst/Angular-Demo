import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProducto } from "./product";
import { ProductService } from "./product.service";

@Component({   
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
}) 
export class ProductListComponent implements OnInit, OnDestroy{
    tituloPagina ='Lista de Productos:';
    anchoImagen =50;
    margenImagen =2;
    mostrarImagen= false;
    errorMessage= '';
    sub!: Subscription;
    
    private _filtrarLista = '';
    get filtrarLista(): string {
      return this._filtrarLista;
    }
    set filtrarLista(value: string) {
      this._filtrarLista = value;
      console.log('In setter:', value);
      this.productsFiltrado = this.filtroEjecutado(value);
    }

    productsFiltrado: IProducto[] = [];
    products: IProducto[] = [];

    constructor(private productService:ProductService) {}

    filtroEjecutado(filtrarPor: string): IProducto[] {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.products.filter((product: IProducto) =>
        product.nombreProducto.toLocaleLowerCase().includes(filtrarPor));
    }

    toggleImage(): void{
      this.mostrarImagen =!this.mostrarImagen;
    }

    ngOnInit(): void{
      this.sub = this.productService.getProductos().subscribe({
        next: products => {
          this.products = products;
          this.productsFiltrado = this.products;
        },
        error: err => this.errorMessage = err
      });      
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
}