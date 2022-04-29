import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from 'src/app/model/model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
})
export class PageDetailsPage implements OnInit {

  place: Place;
  constructor(private r : ActivatedRoute,
              private s : PlacesService,
              private router : Router,
              private alert : AlertController) { }

  ngOnInit() {
    this.r.paramMap.subscribe(paramaetro  => {
     const id =  paramaetro.get('placeId');
     this.place = this.s.getPlace(id);
    })
  }

 async deletePlace(){
  const alertElement = await this.alert.create(
      {
        header: "¿Estás seguro de eliminar registro?",
        message: "Confirmar",
        buttons: [
          {
          text: 'Cancelar',
          role: 'cancel'
           },
           {
             text: 'Eliminar',
             handler:()  => {
                this.s.deletePlace(this.place.id);
                this.router.navigate(['/places']);
             }
           }
        ]
      }
    );
    await alertElement.present();
  }




}
