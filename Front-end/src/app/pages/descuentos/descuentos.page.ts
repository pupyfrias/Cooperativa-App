import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.page.html',
  styleUrls: ['./descuentos.page.scss'],
})
export class DescuentosPage implements OnInit {

  title = 'Descuentos';
  descuentos: any[] = [];

  constructor(
    private cookieService: CookieService,
    private service: MainService,
    private client: HttpClient
  ) { }

  ngOnInit() {

    const formData = new FormData();
    formData.append('token', this.cookieService.get('token'));
    this.client.post<any>('https://coopdgii.com/coopvirtual/App/descuentos', formData)
      .pipe(catchError(this.service.handleError))
      .subscribe({
        next: (data) => {



          data.data.map((dat) => {

            this.descuentos.push({ mes: dat.mes_str, list: dat.det });

          });
          console.log(this.descuentos);
        },
        error: (error) => this.service.showToast(error)

      });
  }

}

