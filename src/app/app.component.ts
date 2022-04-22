import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from './services/main.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Subscription } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';
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

  public toggle = document.querySelector('#themeToggle');
  public prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  public usuario: string;
  public cookie: boolean;
  public checked: boolean;
  private subsList: Subscription[] = [];


  constructor(
    private service: MainService,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {

    this.checked = this.cookieService.check('darkMode');
    this.changeModo(this.checked);
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

  ionViewDidLeave(event: any) {
    this.subsList.forEach(i => i.unsubscribe());
  }

  toggleChange(event: any) {

    const checked = event.detail.checked;
    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    document.body.classList.toggle('dark', checked);
    // Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addListener((e) => this.checkToggle(e.matches));

    if(checked){
      this.cookieService.set('darkMode','true');
    }
    else{
      this.cookieService.delete('darkMode');
    }
  }

  changeModo(checked: boolean) {
    document.body.classList.toggle('dark', checked);
    this.prefersDark.addListener((e) => this.checkToggle(e.matches));
  }

  // Called when the app loads
  loadApp() {
    this.checkToggle(this.prefersDark.matches);
  }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck) {
    this.toggle.setAttribute('checked', shouldCheck);
  }
}
