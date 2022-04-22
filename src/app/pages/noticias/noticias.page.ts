import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  title='Noticias';
  listNoticias: any[]= [];
  subs: Subscription;
  constructor(
    private service: MainService

  ) { }

  ngOnInit() {


    this.subs = this.service.noticia.subscribe(data=>{
      this.listNoticias = data;

      if(this.listNoticias.length ===0){
        this.service.getData('noticias');
      }
    });

  }

  ionViewDidLeave(): void {
    this.subs.unsubscribe();
  }
}
