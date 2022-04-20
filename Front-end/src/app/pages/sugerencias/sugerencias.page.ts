import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  @ViewChild('sugerencia') sugerencia: any;

  title = 'Sugerencias';
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async setSugerencia() {

    console.log(this.sugerencia.value);

    const toast = await this.toastController.create({
      color: 'success',
      duration: 3000,
      message: 'Sugerencia enviado con exito',
    });
    this.sugerencia.value = '';
    await toast.present();

  }
}
