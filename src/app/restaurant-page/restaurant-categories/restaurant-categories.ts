import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuCategory } from '../../models/MenuCategory';

@Component({
  selector: 'app-restaurant-categories',
  standalone: false,
  templateUrl: './restaurant-categories.html',
  styleUrl: './restaurant-categories.scss'
})
export class RestaurantCategories {
  @Input() categories: MenuCategory[];
  @Input() selectedCategoryId: number;
  @Output() categoryChanged = new EventEmitter<number>();

  onCatClick(id: number) {
    this.categoryChanged.emit(id);
    console.log(id)
  }
}
