import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantPage } from './restaurant-page/restaurant-page';
import { App } from './app';
import { Main } from './main/main';

const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'rest/:id',
    component: RestaurantPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
