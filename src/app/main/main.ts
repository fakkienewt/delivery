import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  constructor(public router: Router,
    private appService: AppService,
  ) {

  }

  get restaurants() {
    return this.appService.getRestaurants();
  }

  onRestaurantClick(id: number): void {
    console.log(id);
    console.log(this.router);
    this.router.navigate([`rest/${id}`]);
  }
}
