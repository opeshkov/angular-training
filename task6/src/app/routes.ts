import { Routes } from '@angular/router';
import { CanActivateProductsService } from './services/CanActivateProducts/can-activate-products.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/app/modules/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'src/app/modules/about/about.module#AboutModule' },
  { path: 'products', canActivate: [CanActivateProductsService], loadChildren: 'src/app/modules/products/products.module#ProductsModule'},
  { path: '**', redirectTo: 'home' }
];
