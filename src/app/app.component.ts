import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {  ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  customStripeForm:FormControl;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
  ) {
    this.initializeApp();
    this.ngOnInit();
  }

 ngOnInit(){
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
}
