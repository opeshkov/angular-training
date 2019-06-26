import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, PRODUCTS} from '../mocks/products';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public get productsStream() : Observable<IProduct[]> {
    return of(PRODUCTS).pipe(
      delay(500)
    );
  }


}
