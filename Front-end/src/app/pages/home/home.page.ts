
import { AfterContentChecked, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';


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
  subsList: Array<Subscription> = [];

  constructor(
    private service: MainService,
  ) { }

  ngOnInit() {

    this.service.getResume();
    this.service.getNoticias();
    const subs1 = this.service.cuentas.subscribe(data => {
      this.cuentas = data;
    });

    const subs2 = this.service.prestamos.subscribe(data => {
      this.prestamos = data;
    });

    const subs3 = this.service.noticia.subscribe(data => {
      this.listNoticia = data;
    });

    this.subsList.push(subs1);
    this.subsList.push(subs2);
    this.subsList.push(subs3);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  ionViewDidLeave(): void {

    this.subsList.forEach(i => {
      i.unsubscribe();
    });
  }

}
