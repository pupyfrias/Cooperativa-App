import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  title='Noticias';
  listNoticias: any[]= [];
  constructor(
    private service: MainService

  ) { }

  ngOnInit() {

    this.service.noticia.subscribe(data=>{

      this.listNoticias = data;
    });
  }

}
