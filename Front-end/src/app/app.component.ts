import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
