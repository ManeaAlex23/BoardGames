import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { AuthService } from ".././auth.service";
import {Route, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string="";
  email:string="";
  city:string="";
  district:string="";
  password:string="";
  ConfirmPassword="";

  constructor(
    private alert:AlertController,
    private nav: NavController,
    private fb: FormBuilder ,
    private authService : AuthService)
  {

  }

  ngOnInit() {
  }

  register() {


      if(this.password!=this.ConfirmPassword)
      { console.log(this.password);
        console.log("Nu ai voie ");
      }
      else
      {
          this.nav.navigateRoot(['/login']);
      let res =  this.authService.register(
        {
          "UserName":this.username,
          "UserEmail":this.email,
          "Password":this.password

        }).subscribe(data =>{
        console.log("am aici " +data);
      }, error => {
              console.log(error);
              if(error.status == 400){
                this.showAlert("","Nu ai introdus bine datele sau acest user este luat");
              }
              else if (error.status == 404 ){
                this.showAlert("Mentenanta","Serviciu indisponibil momentan");
              }
            });



      }



  }



  async showAlert(header:string,message:string){
    const alert =  await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()
  }


}
