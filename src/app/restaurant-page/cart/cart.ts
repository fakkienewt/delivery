import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { CartItem } from './cart.item';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
  cartItems$: Observable<CartItem[]>;
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }
}
