import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private CurrentUserToDisplay="";
  constructor() {}

  ngOnInit() {
  this.GetCurrentUser();
  }
  GetCurrentUser(){
    this.CurrentUserToDisplay = localStorage.getItem('curentUser');
  }

}
