import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {GoogleMapsComponent} from '../../../app/google-maps/google-maps.component';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule

  ],
  declarations: [MapPage,GoogleMapsComponent]
})
export class MapPageModule {}
