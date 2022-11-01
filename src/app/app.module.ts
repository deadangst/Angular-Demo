import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './home/bienvenida.component';
import { RouterModule } from '@angular/router';
import { ProductoModule } from './products/producto.module';

@NgModule({
  declarations: [
    AppComponent, 
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: BienvenidaComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductoModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
