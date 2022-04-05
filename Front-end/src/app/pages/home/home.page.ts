
import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { HttpClient } from '@angular/common/http';
import {MainService} from '../../services/main.service';


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

  title = 'Home';
  listNoticia: any[] = [];
  constructor(
    private client: HttpClient,
    private service: MainService
    ) { }

  ngOnInit() {

    this.client.get<any[]>('https://coopdgii.com/wp-json/wp/v2/pages')
      .subscribe(data => {

        data.forEach(element => {

          if (element.title.rendered === 'Noticias') {
            const info: string = element.content.rendered.replace(/(\r\n|\n|\r)/gm, '').replace('  ','');
            const start = info.search('<article');
            const end = info.search('</article>				</div>');
            const list = info.substring(start,end+10).split('</article>');

            list.map(value=>{
              const title = value.substring(value.search('/" >				')+4,value.search('</a>		</h3>')).trim();
              const imagen =value.substring(value.search('src="')+5,value.search('.jp')+5).replace('"','');//imagen
              const resumen= value.substring(value.search('<p>')+3,value.search('</p>'));//resumen
              const link =value.substring(value.search('more" href="')+12,value.search('" >				Leer Más'));//link
              const date =value.substring(value.search('class="elementor-post-date">')+28,value
              .search('</span>				</div>')).trim();//fecha

              this.listNoticia.push({title,resumen,link,imagen,date});
            });

          }
        });
      }, error => {
        console.log('Error');
      }, () => {
        console.log('Done');
      });

      this.service.noticia.next(this.listNoticia);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }


}
