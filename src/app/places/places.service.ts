import { Injectable } from '@angular/core';
import { Place } from '../model/model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places : Place[] = [
    {
    id: '1',
    title: 'Teotihuacán',
    imageURL: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/Teotihuac%C3%A1n-celebra-m%C3%A1s-de-100-a%C3%B1os-1280x720.jpg',
    comments: ['This city was owesome in pass time ....', 'Beatifull, simply awesome'],
   },
   {
    id: '2',
    title: 'Machu Picchu',
    imageURL: 'https://content.r9cdn.net/rimg/dimg/19/e5/ef7b40cc-city-45618-16ed2f16974.jpg?crop=true&width=1366&height=768&xhint=1742&yhint=1434',
    comments: ['A pesar de ser uno de los sitios históricos más conocidos del mundo, el pasado de la ciudadela inca y las personas que la habitaron sigue siendo uno de los más misteriosos para los historiadores occidentales.']
   },
   {
    id: '3',
    title: 'Cascadas de agua azul',
    imageURL: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/12/02/61a8eb8b028ad.jpeg',
    comments: ['El laberinto de cascadas albicelestes de Agua Azul, en México']
   },
   {
    id: '4',
    title: 'Cascadas de agua azul 2',
    imageURL: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/12/02/61a8eb8b028ad.jpeg',
    comments: []
   }
];

  constructor(private http: HttpClient) {

  }


  getPlaces(){
   return [...this.places]; //Retorna una copia del objeto
  }

  getPlace(id : string){
     return {
       ...this.places.find(places  => {
         return places.id == id
       })
  }
}

  adPlace(title : string, imageURL: string){
      this.places.push(
        {
         id: this.places.length + 1 + "",
         title: title,
         imageURL: imageURL,
         comments: [],
       }
      )
  }

  deletePlace(id: string){
   this.places = this.places.filter(x  => {
     return x.id !== id
   })
  }

  getFotos(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=15');
  }


}
