import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from './services/main.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public pages = [
    { title: 'Noticias', url: '/noticias', icon: 'notifications' },
    { title: 'Tasas', url: '/tasas', icon: 'timeline' },
    { title: 'Contactos', url: '/contactos', icon: 'phone' },
    { title: 'Sugerencias', url: '/sugerencias', icon: 'comment' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' }
  ];
  public authPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Cuentas', url: '/cuentas', icon: 'account_balance' },
    { title: 'Prestamos', url: '/prestamos', icon: 'attach_money' },
    { title: 'Inversiones', url: '/inversiones', icon: 'business' },
    { title: 'Solicitudes', url: '/solicitudes', icon: 'assignment_returned' },
    { title: 'Descuentos', url: '/descuentos', icon: 'money_off' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' }
  ];

  public usuario: string;
  public cookie: boolean;
  private subsList: Subscription[] = [];

  constructor(
    private service: MainService,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {

    const subs1 = this.service.cookie.subscribe(data => this.cookie = data);
    const subs2 = this.service.usuario.subscribe(data => this.usuario = data);
    this.subsList.push(subs1);
    this.subsList.push(subs2);

    if (this.cookieService.get('token')) {
      this.cookie = true;
    }
    else {
      this.cookie = false;
    }
  }

  ionViewDidLeave(){
    this.subsList.forEach(i=> i.unsubscribe());
  }

}
