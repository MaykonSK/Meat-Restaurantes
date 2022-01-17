
import { Restaurant } from './restaurant/restautant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] //lista de restaurantes

  //definindo a classe restaurantService no construtor
  constructor(private restaurantsService: RestaurantsService) { }

  //ao iniciar o component
  ngOnInit() {
    /* Neste método chamamos a função restaurantsService.getRestaurants, que nos retorna um Observable contendo um array de restaurantes, então atribuímos ao this.restaurants */
    // subscribe() -Invoca uma execução de um Observable e registra os manipuladores do Observer para notificações que ele emitirá. -Observável- representação de qualquer conjunto de valores em qualquer período de tempo.
    this.restaurantsService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
