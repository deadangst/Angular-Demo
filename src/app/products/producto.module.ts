import { NgModule } from '@angular/core';
import { ProductoDetalladoComponent } from './producto-detallado.component';
import { ConvertirAEspaciosPipe } from '../shared/spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductoDetalladoGuard } from './producto-detallado.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertirAEspaciosPipe,
    ProductoDetalladoComponent
  ],
  imports: [  
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate:[ProductoDetalladoGuard],
        component: ProductoDetalladoComponent 
      },
    ]), SharedModule
  ]
})
export class ProductoModule { }
