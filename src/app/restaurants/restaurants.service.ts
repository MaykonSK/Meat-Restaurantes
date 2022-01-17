import { Restaurant } from "./restaurant/restautant.model";
import { MEAT_API } from "app/app.api";

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";
import 'rxjs/add/operator/catch';
import { Http } from "@angular/http";
import { MenuItem } from "./restaurant-detail/menu-item/menu-tem.model";


@Injectable()
export class RestaurantsService {

  //injetando o http
  constructor(private http: Http) { }

  //obsersable - observa a interface de lista de restaurantes
  getRestaurants(): Observable<Restaurant[]> {
    // o metodo get não executa nenhuma ação, ele é apenas para configurar o observable que vai acessar a URL, quando alguem subscrever (subscribe)
    //operador catch serve para tratar erro. O mesmo está utilizando classe externa
    return this.http.get('http://localhost:3000/restaurants').map(response => response.json()).catch(ErrorHandler.handlerError);
  }

  //retornar o id do
  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get('http://localhost:3000/restaurants/'+id).map(response => response.json()).catch(ErrorHandler.handlerError);
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get('http://localhost:3000/restaurants/'+id+'/reviews').map(response => response.json()).catch(ErrorHandler.handlerError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get('http://localhost:3000/restaurants/'+id+'/menu').map(response => response.json()).catch(ErrorHandler.handlerError);
  }
}
