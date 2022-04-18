import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public noticia = new BehaviorSubject<any []>([]);
  public cookie = new BehaviorSubject<boolean>(false);

  constructor(private toastController: ToastController) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error.status);
  }

  async showToast(error: number): Promise<void>{

    let messageError = '';
    if(error === 0){ messageError = 'Off line';}
    else if(error >= 400 && error <= 499 ){ messageError = 'Ocurrió un problema del lado del cliente';}
    else if(error >= 500 && error <= 599 ){ messageError = 'Ocurrió un problema en el Servidor';}
    else { messageError = 'Ocurrió un problema';}

    const toast = await this.toastController.create({
      color: 'danger',
      duration: 3000,
      message: messageError,
    });

    await toast.present();
  }

async showToastMessage(messageError: string): Promise<void>{
    const toast = await this.toastController.create({
      color: 'danger',
      duration: 3000,
      message: messageError,
    });

    await toast.present();
  }

}

