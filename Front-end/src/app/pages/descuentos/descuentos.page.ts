import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.page.html',
  styleUrls: ['./descuentos.page.scss'],
})
export class DescuentosPage implements OnInit {

  title = 'Descuentos';
  constructor() { }

  ngOnInit() {
  }

}
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
