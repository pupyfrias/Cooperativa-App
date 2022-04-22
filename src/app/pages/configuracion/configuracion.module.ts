import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';

import { ConfiguracionPage } from './configuracion.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPageRoutingModule,
    MenuModule
  ],
  declarations: [ConfiguracionPage]
})
export class ConfiguracionPageModule {}
