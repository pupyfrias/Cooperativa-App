import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit{

  title = 'Prestamos';
  prestamos: any[] = [];
  subscription: Subscription;
  constructor(private service: MainService) { }


  ngOnInit() {

    this.subscription = this.service.prestamos.subscribe({
      next: (data) => {
        this.prestamos = data;
        if (this.prestamos.length === 0) {
          this.service.getResume();
        }
      }
    });
  }

  ionViewDidLeave(): void {
    this.subscription.unsubscribe();
  }

}
