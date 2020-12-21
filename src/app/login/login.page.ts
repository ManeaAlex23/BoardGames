import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { AuthService } from ".././auth.service";
import {Route, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavController, AlertController, LoadingController, NumericValueAccessor } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username:string="";
    password:string="";
    route:Router;
    tokene:any;

  constructor(
    private alert:AlertController,
    private nav:NavController,
    private fb: FormBuilder ,
     private authService : AuthService)
  {


  }

  ngOnInit() {
    this.postGame();
  }

  login() {

    this.authService.login(
      {
      'username':this.username,
      'password':this.password}).subscribe(data => {
        this.tokene=data;
        localStorage.setItem('curentUser',this.username);

        //console.log('Object'+this.token.token);
      this.authService.saveToken(this.tokene.token);

      this.nav.navigateRoot(['/tabs/tab2']);

    }, error => {
            console.log(error);
            if(error.status == 401){
              this.showAlert("Inregistreaza-te","Nu ai acces");
            }
            else if (error.status == 404 ){
              this.showAlert("Mentenanta","Serviciu indisponibil momentan");
            }
            else if (error.status == 400){
              this.showAlert("Spatiu gol","introdu datele tale de logare");
            }
            else if (error.status == 0){
              this.showAlert("","Serviciu indisponibil");
            }

          });

  }

  postGame(){
    this.authService.postGame({
      'title':'Marte',
      'description':'Joc de societate',
      'imageUrl':'test.jpg'
    })
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
