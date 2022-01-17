import { RestaurantsService } from './../restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant/restautant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  //recebendo a class services
  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    //chamando a função restaurantById e subscrevendo para receber o id
    this.restaurantService.restaurantById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant)
  }

}
