import { Injectable } from '@angular/core';
import { CanActivate,Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private authguard:AuthService, private router:Router) { }

  canActivate():boolean{
    if(this.authguard.isAuthenticated()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
