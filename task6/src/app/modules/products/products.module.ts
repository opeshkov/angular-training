import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from "../../components/products-container/products-container.component";
import { ProductsComponent } from "../../components/products/products.component";
import { ProductDetailsComponent } from "../../components/product-details/product-details.component";
import { RouterModule } from "@angular/router";
import { ProductsResolveService } from "../../services/ProductsResolve/products-resolve.service";
import { ProductsDetailsResolveService } from "../../services/ProductDetailsResolve/products-details-resolve.service";
import { CanActivateProductDetailsService } from "../../services/CanActivateProductDetails/can-activate-product-details.service";

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductsContainerComponent, resolve: {products: ProductsResolveService},  children: [
          { path: '', component: ProductsComponent},
          { path: ':id', component: ProductDetailsComponent, resolve: {product: ProductsDetailsResolveService}, canActivate: [CanActivateProductDetailsService] },
          { path: '**', redirectTo: 'products'}
      ]},
    ])
  ]
})
export class ProductsModule { }
