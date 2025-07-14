import { Injectable } from "@angular/core";
import { AppService } from "../../app.service";
import { CartItem } from "./cart.item";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable, of } from "rxjs";

@Injectable()
export class CartService {
    constructor(private appServise: AppService) {

    }

    private items: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

    addItem(restId: number, itemId: number): void {
        const menuItem = this.appServise.findItem(restId, itemId);
        const list = [...this.items.value];
        list.push({
            itemId: itemId,
            restId: restId,
            title: menuItem.title,
            qty: 1,
            sell: menuItem.price,
        });
        this.items.next(list);
    }
    get cartItems$(): Observable<CartItem[]> {
        return this.items.asObservable();
    }
    plusItem(): void {

    }
    minusItem(): void {

    }
    deleteitem(): void {

    }
}