import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesPageRoutingModule } from './solicitudes-routing.module';

import { SolicitudesPage } from './solicitudes.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatIconModule } from '@angular/material/icon';
import { AddComponent } from './add/add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Solicitudes } from './solicitudes-models';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { BarraModule } from 'src/app/components/barra/barra.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesPageRoutingModule,
    MenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MaterialFileInputModule,
    BarraModule
  ],
  declarations: [SolicitudesPage, AddComponent],
  providers: [Solicitudes]
})
export class SolicitudesPageModule { }
