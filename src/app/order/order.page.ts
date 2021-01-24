import { Component, OnInit } from '@angular/core';
import {OrderService}from '../services/order.service'
import { GamesService } from '../games.service';
import {OrderModel,GameModel} from '../models/games';
import { NavController, AlertController, LoadingController, NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders:any;
  city:string="";
  district:string="";
  deliverAdress:string="";
  clientPhoneNumber:string="";
  rentedHours:number;
  gameId=[];
  constructor(private orderService:OrderService,private cartService:GamesService,private nav:NavController) { }

  ngOnInit() {
    this.GetUserOrd();
  }

  GetUserOrd(){
    this.orders = this.cartService.getCart();
    //console.log("Orders "+this.orders.entries());
    for(let [index,p] of this.orders.entries()){
      this.gameId.push(p.id);

      //console.log(p.id);
    }
      console.log(this.gameId);
  }

  PlaceOrder(){

    for (let p of this.gameId){
      let result = this.orderService.MakeAnOrder({
        "deliverAdress": this.deliverAdress, 
         "city": this.city,
         "gameId": p,
         "isProcesed": true,
         "isDelivered": false,
         "currentCurierLocation": "string",
         "rentedHours": this.rentedHours,
         "clientPhoneNumber": '0'+this.clientPhoneNumber.toString(),
         "currierPhoneNumber": "string"

      }).subscribe(data =>{
        console.log("Am plasat order "+data);
      },error =>{
        console.log(error);


      });

  this.nav.navigateRoot(['/card-modal']);
    }




  }
}
