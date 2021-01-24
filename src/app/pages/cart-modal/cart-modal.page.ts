import { Component, OnInit } from '@angular/core';
import {GameModel} from '../../models/games';
import { GamesService } from './../../games.service';
import { ModalController, NavParams } from '@ionic/angular';
import { NavController, AlertController, LoadingController, NumericValueAccessor } from '@ionic/angular';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  product:Array<GameModel>;
  total:any;
  constructor(private cartService:GamesService,private modalCtrl:ModalController,private nav:NavController,private alert:AlertController) { }

  ngOnInit() {
    this.product = this.cartService.getCart();

    console.log("Comanda",this.product);
  }

  decreaseCartItem(product){

    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product){

    this.cartService.addProductToCart(product);

  }
  removeCartItem(product){

    this.cartService.removeProduct(product);
  }
  getTotal(){

    this.total = this.product.reduce((i,j) => i+j.price *j.numberofUnits,0);
    localStorage.setItem("total",this.total);
    return this.total;
  }
  close(){
    //this.modalCtrl.dismiss();
    this.nav.navigateRoot(['/tabs/tab2']);

  }

  async checkout(product) {
   // Perfom PayPal or Stripe checkout process

   let alert = await this.alert.create({
     header: 'Thanks for your Order!',
     message: 'We will deliver your education as soon as possible',
     buttons: ['OK']
   });
   alert.present().then(() => {
      this.nav.navigateRoot(['/order']);

   });
 }

}
