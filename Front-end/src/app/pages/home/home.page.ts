
import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit, AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    autoplay: { delay: 5000 }
  };

  title = 'Inicio';
  listNoticia: any[] = [];
  cuentas: any = [];
  prestamos: any = [];


  constructor(
    private client: HttpClient,
    private service: MainService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {

    const formData = new FormData();
    formData.append('token', this.cookieService.get('token'));
    this.client.post<any>('https://coopdgii.com/coopvirtual/App/resumen', formData)
      .pipe(catchError(this.service.handleError))
      .subscribe({
        next: (data) => {

          this.cuentas = data.data.cuentas;
          this.prestamos = data.data.prestamos;

          console.log(this.cuentas);
          console.log(this.prestamos);
        },
        error: (error) => this.service.showToast(error)

      });


    this.service.noticia.subscribe(data => this.listNoticia = data);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }


}
