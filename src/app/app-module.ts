import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { RestaurantPage } from './restaurant-page/restaurant-page';
import { AppService } from './app.service';
import { RestaurantCategories } from './restaurant-page/restaurant-categories/restaurant-categories';

@NgModule({
  declarations: [
    App,
    Header,
    Main,
    Footer,
    RestaurantPage,
    RestaurantCategories,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    AppService,
  ],
  bootstrap: [App]
})
export class AppModule { }
