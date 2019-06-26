import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateProductsService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.queryParams.login && ['admin', 'user'].includes(route.queryParams.login);
  }
}
