import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { MenuItem } from '../models/MenuItem';
import { MenuCategory } from '../models/MenuCategory';
import { CategoryWithItems } from '../models/CategoryWithItems';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-restaurant-page',
  standalone: false,
  templateUrl: './restaurant-page.html',
  styleUrl: './restaurant-page.scss'
})

export class RestaurantPage implements OnInit {
  categoryWithItems: CategoryWithItems[];
  categories: MenuCategory[];
  rest: { title: string, img: string };
  restId: number;

  selectedCategoryId: number;

  get restImg(): string {
    return this.rest.img;
  }

  get restTitle(): string {
    return this.rest.title;
  }

  constructor(private route: ActivatedRoute, 
    private appService: AppService,
    private cartService: CartService,
  ) {

  }
  ngOnInit(): void {
    this.restId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.rest = this.appService.getRestaurant(this.restId);
    this.categories = this.appService.getCategories(this.restId);
    this.selectedCategoryId = this.categories[0].catId;
    this.categoryWithItems = this.appService.getCategoriesWithItems(this.restId);
    console.log(this.categoryWithItems);
  }

  onCategoryChanged(id: number): void {
    this.selectedCategoryId = id;
  }

  onAddItem(itemId: number): void {
    // add to cart
    this.cartService.addItem(this.restId, itemId);
  }
}
