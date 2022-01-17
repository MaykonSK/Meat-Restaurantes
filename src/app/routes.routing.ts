import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent  }, //quando não especificar a rota, deve mostrar o component principal
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent },
      {path: 'reviews', component: ReviewsComponent }
  ]},
];

