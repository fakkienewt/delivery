import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { MenuItem } from '../models/MenuItem';

@Component({
  selector: 'app-restaurant-page',
  standalone: false,
  templateUrl: './restaurant-page.html',
  styleUrl: './restaurant-page.scss'
})
export class RestaurantPage implements OnInit {
  isLoading: boolean;
  menu: MenuItem[];

  rest: { title: string, img: string };

  get restImg(): string {
    return this.rest.img;
  }

  get restTitle(): string {
    return this.rest.title;
  }

  constructor(private route: ActivatedRoute, private appService: AppService) {

  }
  ngOnInit(): void {
    this.isLoading = true;

    const restId = +(this.route.snapshot.paramMap.get('id') || 0);
    console.log(restId);
    this.menu = this.appService.getMenu(restId);
    this.rest = this.appService.getRestaurant(restId);
    
    console.log(this.menu);
  }

}
