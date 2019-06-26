import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProductsService } from './services/products.service';
import { ProductsResolveService } from './services/ProductsResolve/products-resolve.service';
import { ProductsDetailsResolveService } from './services/ProductDetailsResolve/products-details-resolve.service';
import { CanActivateProductsService } from './services/CanActivateProducts/can-activate-products.service';
import { CanActivateProductDetailsService } from './services/CanActivateProductDetails/can-activate-product-details.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService,
    ProductsResolveService,
    ProductsDetailsResolveService,
    CanActivateProductsService,
    CanActivateProductDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
