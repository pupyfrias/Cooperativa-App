import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {


  constructor(
    private cookie: CookieService,
    private router: Router,
    private service: MainService,

  ) { }



  ngOnInit() {

    this.service.cookie.subscribe(data => {

      const pathName = window.location.pathname;

      if (data && pathName === '/logout') {

        this.cookie.deleteAll();
        this.router.navigateByUrl('/login');
        this.service.cookie.next(false);
      }
    });
  }


}
