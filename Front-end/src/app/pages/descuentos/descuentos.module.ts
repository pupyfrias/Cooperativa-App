import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescuentosPageRoutingModule } from './descuentos-routing.module';

import { DescuentosPage } from './descuentos.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescuentosPageRoutingModule,
    MenuModule
  ],
  declarations: [DescuentosPage]
})
export class DescuentosPageModule {}
