import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public noticia = new BehaviorSubject<any []>([]);
  constructor() { }
}
