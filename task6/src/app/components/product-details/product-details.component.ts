import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from "../../mocks/products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public productDetails : IProduct;
  private activatedRouteSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouteSub = this.activatedRoute.data.subscribe((data) => {
      this.productDetails = data.product
    })
  }

  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe()
  }

}
