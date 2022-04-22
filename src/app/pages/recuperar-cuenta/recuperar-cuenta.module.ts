import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaPageRoutingModule } from './recuperar-cuenta-routing.module';

import { RecuperarCuentaPage } from './recuperar-cuenta.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCuentaPageRoutingModule,
    MenuModule
  ],
  declarations: [RecuperarCuentaPage]
})
export class RecuperarCuentaPageModule {}
