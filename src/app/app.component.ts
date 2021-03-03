import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {  ReactiveFormsModule} from '@angular/forms';
import {AgmMap,MouseEvent,MapsAPILoader  } from '@agm/core';
import { Directive, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent{
  tabsPlacement: string = 'bottom';
  tabsLayout: string = 'icon-top';
 //@ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
//  customStripeForm:FormControl;
  // lat:any;
  // lng:any;
  // getAddress:any;
  // zoom:any;
  // latitude:any;
  // longitude:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    //private apiloader: MapsAPILoader,

  ) {
    this.initializeApp();
    this.ngOnInit();
    this.checkPlatform();

  }

 ngOnInit(){

   // this.get()
   //  this.agmMap.triggerResize(true);
   //   this.zoom = 16;
      // this.customStripeForm = new FormGroup({
      //       'cardNumber':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      //       'expMonth':new FormControl(null),
      //       'expYear':new FormControl(null),
      //       'cvv':new FormControl(null)
      //  })
 }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate(['login']);
    });
  }
  checkPlatform(){
    if (!this.platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-left';
      console.log("Pula");
    }
  }
//   get() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position: Position) => {
//             if (position) {
//                 this.lat = position.coords.latitude;
//                 this.lng = position.coords.longitude;
//                 this.getAddress = (this.lat, this.lng)
//                 console.log(position)
//                 this.apiloader.load().then(() => {
//                     let geocoder = new google.maps.Geocoder;
//                     let latlng = {
//                         lat: this.lat,
//                         lng: this.lng
//                     };
//                     geocoder.geocode({
//                         'location': latlng
//                     }, function(results) {
//                         if (results[0]) {
//                             this.currentLocation = results[0].formatted_address;
//                             console.log(this.assgin);
//                         } else {
//                             console.log('Not found');
//                         }
//                     });
//                 });
//             }
//         })
//     }
// }
// mapClicked($event: MouseEvent) {
//     this.latitude = $event.coords.lat,
//         this.longitude = $event.coords.lng
//     this.apiloader.load().then(() => {
//         let geocoder = new google.maps.Geocoder;
//         let latlng = {
//             lat: this.latitude,
//             lng: this.longitude
//         };
//         geocoder.geocode({
//             'location': latlng
//         }, function(results) {
//             if (results[0]) {
//                 this.currentLocation = results[0].formatted_address;
//                 console.log(this.currentLocation);
//             } else {
//                 console.log('Not found');
//             }
//         });
//     });
// }

}
