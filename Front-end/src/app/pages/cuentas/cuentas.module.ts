import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentasPageRoutingModule } from './cuentas-routing.module';

import { CuentasPage } from './cuentas.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { BarraModule } from 'src/app/components/barra/barra.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentasPageRoutingModule,
    MenuModule,
    BarraModule
  ],
  declarations: [CuentasPage]
})
export class CuentasPageModule {}
