import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesPageRoutingModule } from './solicitudes-routing.module';

import { SolicitudesPage } from './solicitudes.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesPageRoutingModule,
    MenuModule
  ],
  declarations: [SolicitudesPage]
})
export class SolicitudesPageModule {}
