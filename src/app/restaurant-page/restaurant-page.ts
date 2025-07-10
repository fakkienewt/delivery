import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { MenuItem } from '../models/MenuItem';
import { MenuCategory } from '../models/MenuCategory';

@Component({
  selector: 'app-restaurant-page',
  standalone: false,
  templateUrl: './restaurant-page.html',
  styleUrl: './restaurant-page.scss'
})

export class RestaurantPage implements OnInit {
  menu: MenuItem[];
  categories: MenuCategory[];
  rest: { title: string, img: string };

  selectedCategoryId: number;

  get restImg(): string {
    return this.rest.img;
  }

  get restTitle(): string {
    return this.rest.title;
  }

  constructor(private route: ActivatedRoute, private appService: AppService) {

  }
  ngOnInit(): void {
    const restId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.rest = this.appService.getRestaurant(restId);
    this.categories = this.appService.getCategories(restId);
    this.selectedCategoryId = this.categories[0].catId;
  }

  onCategoryChanged(id: number): void {
    this.selectedCategoryId = id;
  }
}
