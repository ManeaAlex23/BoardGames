import { Component } from '@angular/core';
import {OrderService}from '../services/order.service'
import {OrderModel} from '../models/games';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  orders:Array<OrderModel>
  private CurrentUserToDisplay="";
  constructor(private orderService:OrderService) {}

  ngOnInit() {
  this.GetCurrentUser();
  this.GetOrderByUser();
  }
  GetCurrentUser(){
    this.CurrentUserToDisplay = localStorage.getItem('curentUser');
  }
  GetOrderByUser(){
    let result =this.orderService.GetUserOrders().subscribe(res =>{
      this.orders = res;
      console.log(this.orders);
    })
  }
}
