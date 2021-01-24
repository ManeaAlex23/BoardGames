import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import { NavController, AlertController, LoadingController, NumericValueAccessor } from '@ionic/angular';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {  FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule} from '@angular/forms';
import {OrderModel,GameModel} from './../../models/games';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.page.html',
  styleUrls: ['./card-modal.page.scss'],
})
export class CardModalPage implements OnInit {

  cardNumber:string;
  UserCardName:string;
  expMonth:number;
  expYear:any;
  cvv:string;
  gameId=[];
  orders:any;
  total:number;
  selectDropDownMonth:any;
  selectDropDownYear:any;
  dropMonth= [];
  dropYear:any = [];
  SelectedMonth:number;
  SelectedYear:number;

  constructor(private nav:NavController,private cartService:GamesService,private orderService:OrderService  ) { }

  ngOnInit() {
    this.total=localStorage.getItem('total');

  }
  UsePaymentService(){
    this.expMonth=this.SelectedMonth;
    console.log(this.cardNumber,this.expMonth,this.SelectedYear,this.cvv,this.total);
    let res = this.orderService.MakePayment({
      "cardNumber": this.cardNumber,
      "cardMonth": this.expMonth,
      "cardYear": this.SelectedYear,
      "cvv": this.cvv,
      "value": this.total
    }).subscribe(data =>{
      console.log("am aici" +data);
    },error =>{
      console.log(error);
    });
  }
  ApplyDropList(){
    this.dropMonth=[
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
      ]

  this.dropYear=[
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029"
  ]


    this.selectDropDownMonth=this.dropMonth;
    console.log(this.selectDropDownMonth);
    this.selectDropDownYear=this.dropYear;
    console.log(this.selectDropDownYear);
  }
  onChange(selectedMonth){
    this.SelectedMonth=selectedMonth;
    console.log(this.SelectedMonth);
  }
  onChangeYear(selectedYear){
    this.SelectedYear=selectedYear;
    console.log(this.SelectedYear);
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
//   loadStripe() {
//
//     if(!window.document.getElementById('stripe-custom-form-script')) {
//       var s = window.document.createElement("script");
//       s.id = "stripe-custom-form-script";
//       s.type = "text/javascript";
//       s.src = "https://js.stripe.com/v2/";
//       s.onload = () => {
//         window['Stripe'].setPublishableKey('pk_test_aeUUjYYcx4XNfKVW60pmHTtI');
//       }
//
//       window.document.body.appendChild(s);
//     }
//   }
//
//   pay(form) {
//
//   if(!window['Stripe']) {
//     alert('Oops! Stripe did not initialize properly.');
//     return;
//   }
//
//   this.submitted = true;
//
//   console.log(this.customStripeForm);
//   if (this.customStripeForm.invalid) {
//     return;
//   }
//
//   this.formProcess = true;
//   console.log("form");
//   console.log(form);
//   if(!window['Stripe']) {
//     alert('Oops! Stripe did not initialize properly.');
//     return;
//   }
//   (<any>window).Stripe.card.createToken({
//     number: form.cardNumber,
//     exp_month: form.expMonth,
//     exp_year: form.expYear,
//     cvc: form.cvc
//   }, (status: number, response: any) => {
//     this.submitted = false;
//     this.formProcess = false;
//     if (status === 200) {
//       this.message = `Success! Card token ${response.card.id}.`;
//     } else {
//       this.message = response.error.message;
//     }
//   });
// }

}
