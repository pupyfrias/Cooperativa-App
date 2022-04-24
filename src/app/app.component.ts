import { Component, OnInit, HostBinding } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from './services/main.service';
import { Subscription } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {


  @HostBinding('class') componentClass: any;

  public pages = [
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'caret-forward-circle' },
    { title: 'Tasas', url: '/tasas', icon: 'logo-usd' },
    { title: 'Contactos', url: '/contactos', icon: 'call' },
    { title: 'Sugerencias', url: '/sugerencias', icon: 'chatbox-ellipses' },
    { title: 'Preguntas Frecuentes', url: '/preguntas-frecuentes', icon: 'help-circle-outline' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-buoy' }
  ];
  public authPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Cuentas', url: '/cuentas', icon: 'wallet' },
    { title: 'Prestamos', url: '/prestamos', icon: 'cash' },
    { title: 'Inversiones', url: '/inversiones', icon: 'business' },
    { title: 'Solicitudes', url: '/solicitudes', icon: 'create' },
    { title: 'Descuentos', url: '/descuentos', icon: 'trending-down' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' }
  ];

  public toggle = document.querySelector('#themeToggle');
  public prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  public usuario: string;
  public cookie: boolean;
  public checked: boolean;
  public tabsHide: boolean;
  private subsList: Subscription[] = [];


  constructor(
    private service: MainService,
    private cookieService: CookieService,
    public overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {

    this.checked = this.cookieService.check('darkMode');
    this.changeMode(this.checked);
    const subs1 = this.service.cookie.subscribe(data => this.cookie = data);
    const subs2 = this.service.tabsHide.subscribe(data => this.tabsHide = data);
    const subs3 = this.service.usuario.subscribe(data => this.usuario = data);
    this.subsList.push(subs1);
    this.subsList.push(subs2);
    this.subsList.push(subs3);



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
    this.changeMode(checked);

    if (checked) {
      this.cookieService.set('darkMode', 'true');
    }
    else {
      this.cookieService.delete('darkMode');
    }
  }

  changeMode(checked: boolean) {
    document.body.classList.toggle('dark', checked);
    this.prefersDark.addListener((e) => this.checkToggle(e.matches));

    if (checked) {
      this.overlayContainer.getContainerElement().classList.add('mat-theme-dark');
      this.componentClass = 'mat-theme-dark';
      console.log('dark');
    }
    else {
      this.overlayContainer.getContainerElement().classList.add('mat-theme-light');
      this.componentClass = 'mat-theme-light';
      console.log('light');

    }
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
