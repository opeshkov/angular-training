import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'daskldas213kldsm213ld='
    const authReq = req.clone({ headers:
        req.headers.set("Authorization", `Bearer: ${authToken}`)});

    return next.handle(authReq);
  }
}
