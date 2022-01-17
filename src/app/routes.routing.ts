import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent  }, //quando não especificar a rota, deve mostrar o component principal
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent}
];

