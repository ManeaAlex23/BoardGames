import { OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import {GameModel} from '../models/games';
import { NavController, AlertController, LoadingController, NumericValueAccessor } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import {CartModalPageModule} from '../pages/cart-modal/cart-modal.module';
import { AfterViewInit,Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController,Animation } from "@ionic/angular";
import { SMS } from '@ionic-native/sms/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit{
  UserLokingFor:string
  games:Array<GameModel>
  gameId:Array<GameModel>
  game:any;
  id:any;
  cart = [];
  products:Array<GameModel>
  cartItemCount:BehaviorSubject<number>;
  anim:Animation;

@ViewChild('cart',{static:false, read: ElementRef})fab: ElementRef;


  constructor(private gameService:GamesService,
              private nav:NavController,
              private modalCtrl:ModalController,
              private animationCtrl:AnimationController,
              private sms: SMS
            ) {}

ngAfterViewInit(){
    this.anim=this.animationCtrl.create('myanim');

}
  ngOnInit(){
    this.GetAllGames();
    this.cart = this.gameService.getCart();
    this.cartItemCount = this.gameService.getCartItemCount();
    this.sms.send('+40769345970', 'Hello world!');
  }

  addToCart(product){
    this.animateCSS('tada');
    this.gameService.addProductToCart(product);
    this.gameService.getCart();
  //  this.GetSelectedGameId(product.id);
  }

  async openCart(){
      this.animateCSS('bouceOutLeft',true);
    this.nav.navigateRoot(['/cart-modal']);
  //   let modal = await this.modalCtrl.create({
  //     component:CartModalPageModule,
  //     cssClass:'cart-modal'
  //   });
  // modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
      const node = this.fab.nativeElement;
      node.classList.add('animated', animationName)

      //https://github.com/daneden/animate.css
      function handleAnimationEnd() {
        if (!keepAnimated) {
          node.classList.remove('animated', animationName);
        }
        node.removeEventListener('animationend', handleAnimationEnd)
      }
      node.addEventListener('animationend', handleAnimationEnd)
    }

  GetAllGames(){
    let result = this.gameService.DisplayGamesForClient().subscribe(res =>{
      this.games = res;
      console.log(this.games);
    });

  }
  GetSelectedGameId(id){
    console.log("Id-ul cautat este",id)
    let result = this.gameService.DisplaySelectedGameForOrder(id).subscribe(res =>{
        this.gameId = res;
        console.log(this.gameId)
    });

     }

  IncreaseNumberOfLikes(id){
    console.log("You have got like for "+id);
    this.GetSelectedGameId(id);
  }

  IncreaseNumberOfDisLikes(id){
    console.log("Am primit dislike "+id);

  }



}
