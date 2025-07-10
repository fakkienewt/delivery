import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategories } from './restaurant-categories';

describe('RestaurantCategories', () => {
  let component: RestaurantCategories;
  let fixture: ComponentFixture<RestaurantCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
