import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ROUTES } from './routes.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent
   ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) //passando array de rotas
  ],
  providers: [RestaurantsService], //declarando o Restaurant.service
  bootstrap: [AppComponent]
})
export class AppModule { }
