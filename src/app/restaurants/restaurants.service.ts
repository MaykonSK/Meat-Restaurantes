import { Restaurant } from "./restaurant/restautant.model";
import { MEAT_API } from "app/app.api";

import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestaurantsService {

  //injetando o http
  constructor(private http: Http) { }

  //obsersable - observa a interface de lista de restaurantes
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get('http://localhost:3000/restaurants').map(response => response.json());
  }
}
