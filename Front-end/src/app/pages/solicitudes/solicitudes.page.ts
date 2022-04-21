import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  title = 'Solicitudes';
  subs: Subscription;
  solicitudes: any[] = [];
  constructor(private service: MainService) { }

  ngOnInit() {

    this.subs = this.service.solicitudes.subscribe(data => {

      this.solicitudes = data;
      if (this.solicitudes.length === 0) {
        this.service.getSolicitudes();
      }

    });

  }

  ionViewDidLeave(): void {
    this.subs.unsubscribe();
  }


}
