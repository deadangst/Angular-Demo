import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { IProducto } from "./product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

    getProductos(): Observable<IProducto[]>{
        return this.http.get<IProducto[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProducto(id: number): Observable<IProducto | undefined> {
      return this.getProductos()
        .pipe(
          map((products: IProducto[]) => products.find(p => p.idProducto === id))
        );
    }
    private handleError(err: HttpErrorResponse): Observable<never> {
        // en un app real el error no se debe loggear en la consola
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // Error registrado del lado del cliente o en la network
          errorMessage = `Se ha presentado un error: ${err.error.message}`;
        } else {
          // backend retorna una respuesta no exitosa.
          // la respuesta puede contener pistas del error
          errorMessage = `El servidor está retornando este código: ${err.status}, el mensaje de error es: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}