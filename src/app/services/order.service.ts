import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {OrderModel,PaymentModel} from '../models/games';
import {AuthService} from '../auth.service';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Stripe } from '@ionic-native/stripe/ngx';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private OrderPath = environment.ApiUrl +'/orders';
  private PaymentPath = environment.ApiUrl +'/MakePayment';
  private orders:Array<OrderModel>

  constructor(private http:HttpClient,private auth:AuthService,private stripe:Stripe ) { }

//   CreateNewCard(number,expM,expY,cvc){
//     this.stripe.setPublishableKey('pk_test_51IAUaXFVuNXPug7N4U9f0Km2MlV3ohxC1LCRuLpuNZNEDBc5kx9oiL0ICdjXEOGUrdXN6fOGw2g8G8B1DkcV2Uu900heVYyB73');
//
//     let card = {
//     number: number,
//     expMonth: expM,
//     expYear: expY,
//     cvc: cvc
// }
//   this.stripe.createCardToken(card)
//  .then(token => console.log(token.id))
//  .catch(error => console.error(error));
//   }

  MakePayment(data):Observable<Array<PaymentModel>>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.post<Array<PaymentModel>>(this.PaymentPath,data,{headers});
  }

  MakeAnOrder(data):Observable<Array<OrderModel>>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.post<Array<OrderModel>>(this.OrderPath,data,{headers});
  }
  GetUserOrders():Observable<Array<OrderModel>>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.get<Array<OrderModel>>(this.OrderPath,{headers});

  }
  GetSpecificOrder(id):Observable<Array<OrderModel>>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.get<Array<OrderModel>>(this.OrderPath+'/'+id,{headers});
  }

}
