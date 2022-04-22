import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {

  title = 'Cuentas';
  cuentas: any[] = [];
  subscription: Subscription;
  constructor(private service: MainService) { }

  ngOnInit() {

    this.subscription = this.service.cuentas.subscribe(
      data => {
        this.cuentas = data;
        if (this.cuentas.length === 0) {
          this.service.getResume();
        }
      }
    );
  }

  ionViewDidLeave(): void {
    this.subscription.unsubscribe();
  }

}
