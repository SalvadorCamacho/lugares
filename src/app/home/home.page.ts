import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fotos = [];

  constructor(private s: PlacesService) {}

 ngOnInit() {
     this.s.getFotos()
     .subscribe(f => {
       this.fotos = f;
     })

 }

}
