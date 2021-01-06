import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
private request:any;

  constructor(public authService:AuthService){}

  intercept(request: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    this.request = request.clone({
      setHeaders: {
        Authorization: 'Bearer' + '${this.authService.getToken()}',
      }
      }
    );
    return next.handle(request);
  }
}
