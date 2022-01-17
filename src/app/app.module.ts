import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ROUTES } from './routes.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent
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
