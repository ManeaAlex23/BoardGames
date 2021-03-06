import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { GoogleMapsComponent } from '../../google-maps/google-maps.component';





@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})



export class MapPage  {

@ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

  constructor() { }

  ngOnInit() {
    //  this.testMarker();


    }
    async testMarker(){

            let center = await this.mapComponent.map.getCenter();
            await   this.mapComponent.addMarker(center.lat(), center.lng());

        }



}
