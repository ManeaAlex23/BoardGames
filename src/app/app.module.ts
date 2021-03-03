import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder,Validators } from "@angular/forms";
//import { ReactiveFormsModule } from "@angular/forms";
import { HttpErrorResponse} from '@angular/common/http';
import { AuthService } from './auth.service';
import { GamesService } from './games.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { SMS } from '@ionic-native/sms/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import {  ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AgmMap, MouseEvent,MapsAPILoader,AgmCoreModule  } from '@agm/core';
import {GoogleMapsComponent} from '../app/google-maps/google-maps.component';
//import {MapComponent} from '../app/map/map.component'
//import { MapPage } from '../app/map/map.page';
//import { MapPage } from './map/map';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Plugins } from '@capacitor/core';
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    //MapPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CartModalPageModule,FormsModule,ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    ReactiveFormsModule,
    FormBuilder,
    HttpClient,
    AuthService,
    GamesService,
    TokenInterceptorService,
    ReactiveFormsModule,
    FormControl,
    FormsModule,
    Stripe,
    SMS,




    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
