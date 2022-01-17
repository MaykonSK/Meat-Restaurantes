import { Restaurant } from "./restaurant/restautant.model";
import { MEAT_API } from "app/app.api";

import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";
import 'rxjs/add/operator/catch';

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
}
