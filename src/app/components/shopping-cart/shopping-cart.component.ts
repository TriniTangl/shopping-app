import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {DeleteItemAction, EditItemAction} from '../../actions/shopping.actions';
import {AppState} from '../../models/app-state.model';
import {ShoppingItem} from '../../models/shopping.model';
import {selectShoppingItemInCart} from '../../reducers';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    public cartList: Array<ShoppingItem>;
    public loading$: Observable<boolean>;

    constructor(public store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.select(selectShoppingItemInCart).subscribe(list => this.cartList = list);
        this.loading$ = this.store.select(store => store.shopping.loading);
    }

    public removeFromCart(item: ShoppingItem): void {
        item = {
            ...item,
            amount: item.amount + 1,
            amountInCart: item.amountInCart - 1
        };

        this.store.dispatch(new EditItemAction(item));
    }

    public removeAllFromCart(item: ShoppingItem): void {
        item = {
            ...item,
            amount: item.amount + item.amountInCart,
            amountInCart: 0
        };

        this.store.dispatch(new EditItemAction(item));
    }

    public buyAll(): void {
        this.cartList.forEach(item => {
            item = {
                ...item,
                amountInCart: 0
            };

            if (item.amount > 0) {
                this.store.dispatch(new EditItemAction(item));
            } else {
                this.store.dispatch(new DeleteItemAction(item.id));
            }
        });
    }
}
