import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

//modals
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule
  ],
  declarations: [HomePage],
  entryComponents: []
})
export class HomePageModule {}
