import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import {HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.ApiUrl + '/identity/login';
  private registerPath = environment.ApiUrl + '/identity/register';
  private postPath = environment.ApiUrl + '/games';
  private token;

  constructor(private http : HttpClient) { }

    login(data):Observable<any>{
      return this.http.post(this.loginPath, data);
      //return this.http.post(this.loginPath,data.error);
    }

    register(data):Observable<any>{
      return this.http.post(this.registerPath, data,{observe:'response'})

    }


    saveToken(token){
      this.token=token;
    //  console.log(token);
    //  localStorage.setItem('token',token);
    }
     getToken(){

      return this.token;

    }

    postGame(data):Observable<any>{
      return this.http.post(this.postPath,data)
    }

    isAuthenticated(){
      if(this.getToken()){
        return true;
      }
      return false;
    }




}
