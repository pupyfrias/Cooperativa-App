import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  public cookie = new BehaviorSubject<boolean>(false);
  public tabsHide = new BehaviorSubject<boolean>(false);
  public noticia = new BehaviorSubject<any[]>([]);
  public modelo = new BehaviorSubject<any[]>([]);
  public cuentas = new BehaviorSubject<any[]>([]);
  public prestamos = new BehaviorSubject<any[]>([]);
  public solicitudes = new BehaviorSubject<any[]>([]);
  public usuario = new BehaviorSubject<string>(this.cookieService.get('user'));



  constructor(
    private toastController: ToastController,
    private cookieService: CookieService,
    private client: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error.status);
  }

  getResume(): void {

    const formData = new FormData();
    formData.append('token', this.cookieService.get('token'));
    this.client.post<any>('https://coopdgii.com/coopvirtual/App/resumen', formData)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (data) => {
          this.cuentas.next(data.data.cuentas);
          this.prestamos.next(data.data.prestamos);
        },
        error: (error) => this.showToast(error)

      });
  }

  getData(param: string): void {
    this.client.get<any>('https://coopdgii.com/coopvirtual/App/' + param)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (data) => {

          if (param === 'noticias') {
            this.noticia.next(data.data);
          }
          else if (param === 'solicitudes_tipo') {
            this.modelo.next(data.data);
          }

        },
        error: (error) => {
          this.showToast(error);
        }
      });

  }

  getSolicitudes(): void {
    const formData = new FormData();
    formData.append('token', this.cookieService.get('token'));
    this.client.post<any>('https://coopdgii.com/coopvirtual/App/solicitudes', formData)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (data) => {
          this.solicitudes.next(data.data);
        },
        error: (error) => {
          this.showToast(error);
        }
      });

  }
  async showToast(error: number): Promise<void> {

    let messageError = '';
    if (error === 0) { messageError = 'Off line'; }
    else if (error >= 400 && error <= 499) { messageError = 'Ocurrió un problema del lado del cliente'; }
    else if (error >= 500 && error <= 599) { messageError = 'Ocurrió un problema en el Servidor'; }
    else { messageError = 'Ocurrió un problema'; }

    const toast = await this.toastController.create({
      color: 'danger',
      duration: 3000,
      message: messageError,
    });

    await toast.present();
  }

  async showToastMessage(messageError: string, colorToast: string): Promise<void> {
    const toast = await this.toastController.create({
      color: colorToast,
      duration: 3000,
      message: messageError,
    });

    await toast.present();
  }

  async print(messages: string): Promise<void> {
    const toast = await this.toastController.create({
      color: 'success',
      duration: 5000,
      message: messages,
      cssClass: 'toast-custom-class',
      position: 'middle'
    });

    await toast.present();
  }

}

