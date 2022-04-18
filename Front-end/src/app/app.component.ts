import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from './services/main.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Cuentas', url: '/cuentas', icon: 'account_balance' },
    { title: 'Prestamos', url: '/prestamos', icon: 'attach_money' },
    { title: 'Inversiones', url: '/inversiones', icon: 'business' },
    { title: 'Solicitudes', url: '/solicitudes', icon: 'assignment_returned' },
    { title: 'Descuentos', url: '/descuentos', icon: 'money_off' },
    { title: 'Noticias', url: '/noticias', icon: 'notifications' },
    { title: 'Sugerencias', url: '/sugerencias', icon: 'comment' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' },
    { title: 'Tasas', url: '/tasas', icon: 'timeline' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' }
  ];

  title = 'prueba';
  cookie: boolean;
  constructor(
    private service: MainService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {

    this.service.cookie.subscribe(data => this.cookie = data);
    if (this.cookieService.get('token')) {
      this.cookie = true;
    }
    else {
      this.cookie = false;
    }
  }

}
