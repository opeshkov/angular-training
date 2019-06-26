import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../../mocks/products';
import { ProductsService } from '../products.service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailsResolveService implements Resolve<IProduct> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>  {
    return this.productsService.productsStream.pipe(
      map((products: IProduct[]) => {
        return products.filter((product: IProduct) => route.params.id === product.id.toString())[0]
      })
    );
  }
}
