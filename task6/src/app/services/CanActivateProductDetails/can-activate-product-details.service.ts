import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActivateProductDetailsService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.queryParams.login && route.queryParams.login === 'admin';
  }
}
