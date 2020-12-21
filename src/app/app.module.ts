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
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormGroup,FormBuilder,Validators } from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpErrorResponse} from '@angular/common/http';
import { AuthService } from './auth.service';
import { GamesService } from './games.service';
import { TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    ReactiveFormsModule,
    FormBuilder,
    HttpClient,
    AuthService,
    GamesService,
    TokenInterceptorService,



    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
