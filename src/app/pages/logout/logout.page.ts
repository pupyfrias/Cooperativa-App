import {

  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutPage{
  subscription: Subscription;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private service: MainService
  ) { }


  ionViewWillEnter() {
    this.cookie.delete('token');
    this.cookie.delete('user');
    this.service.cookie.next(false);
    this.service.usuario.next('');
    this.router.navigate(['/login']);
  }
}
