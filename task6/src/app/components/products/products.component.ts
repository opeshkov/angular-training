import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from "../../mocks/products";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products : IProduct[];
  private activatedRouteSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouteSub = this.activatedRoute.data.subscribe((data) => {
      this.products = data.products
    })
  }

  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe()
  }
}
