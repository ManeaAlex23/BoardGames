//https://www.youtube.com/watch?v=ZFfVMBhJzVU
import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {AuthService} from './auth.service';
import {GameModel} from './models/games';
import {environment} from '../environments/environment';
import { TokenInterceptorService } from './token-interceptor.service';
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GamesService {


  private GamePath = environment.ApiUrl +'/games';
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private products:Array<GameModel>

  constructor(private http:HttpClient,private auth:AuthService) { }

  DisplayGamesForClient():Observable<Array<GameModel>>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.get<Array<GameModel>>(this.GamePath,{headers});

  }

  DisplaySelectedGameForOrder(id):Observable<Array<GameModel>>{
    let headers =new HttpHeaders();
    headers = headers.set('Authorization','Bearer '+this.auth.getToken());
    return this.http.get<Array<GameModel>>( `${this.GamePath}/${id}`,{headers});

  }

  IncreaseNumberOfLikes(id):Observable<Array<GameModel>>{
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+this.auth.getToken()
    })

    return this.http.put<Array<GameModel>>(`${this.GamePath}/${id}/like`,id,{headers});


  }

  IncreaseNumberOfDislikes(id):Observable<Array<GameModel>>{

  let headers = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer '+this.auth.getToken()
  })


    return this.http.put<Array<GameModel>>(`${this.GamePath}/${id}/dislike`,id,{headers});

  }

getCart(){
  console.log("aveti itemele",this.cart);
  return <Array<GameModel>>this.cart;

}
getCartItemCount(){
  return this.cartItemCount;
}


addProductToCart(product){
    let added =false;
    for (let p of this.cart){
      if(p.id === product.id)
    {
      console.log("maresc");

      p.numberofUnits += 1;
      added =true;
      break;
    }
    }
    if(!added){
      this.cart.push(product);
      product.numberofUnits=1;


    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for(let [index,p] of this.cart.entries()){
      if((p.id === product.id)){
        p.numberofUnits -=1;
        if(p.numberofUnits === 0 ){
          this.cart.splice(index ,1);

        }
        if(this.cartItemCount.value!==0){
        this.cartItemCount.next(this.cartItemCount.value - 1);
        console.log("itemcount--")
      }
      }

    }

  }

  removeProduct(product){
    for(let [index,p] of this.cart.entries()){
      if((p.id === product.id)){
        this.cart.splice(index,1);
        this.cartItemCount.next(this.cartItemCount.value - p.numberofUnits);

      }
  }
}

}


// getGames():Observable<Array><GameModel> {
//   return this.http.get<Array><GameModel>(this.GamePath)
// }
