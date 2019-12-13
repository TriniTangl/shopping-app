import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {OpenDialogAddingAction, OpenDialogEditingAction} from '../../actions/dialog.actions';
import {DeleteItemAction, EditItemAction, LoadItemsAction} from '../../actions/shopping.actions';
import {AppState} from '../../models/app-state.model';
import {ShoppingItem} from '../../models/shopping.model';
import {NotificationMessage, NotificationService, NotificationType} from '../../services/notification.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    public shoppingItems: Array<ShoppingItem>;
    public loading$: Observable<boolean>;

    constructor(
        private store: Store<AppState>,
        private notificationService: NotificationService) {
        this.store.dispatch(new LoadItemsAction());
    }

    ngOnInit() {
        this.store.select(store => store.shopping.list).subscribe(list => this.shoppingItems = list);
        this.loading$ = this.store.select(store => store.shopping.loading);
    }

    public addItem(): void {
        this.store.dispatch(new OpenDialogAddingAction());
    }

    public editItem(item: ShoppingItem): void {
        this.store.dispatch(new OpenDialogEditingAction(item));
    }

    public addItemToCart(item: ShoppingItem): void {
        if (item.amount > 0) {
            item = {
                ...item,
                amount: item.amount - 1,
                amountInCart: item.amountInCart + 1
            };

            this.store.dispatch(new EditItemAction(item));
        }
    }

    public deleteItem(id: string): void {
        this.store.dispatch(new DeleteItemAction(id));
        this.notificationService.setNotification({
            type: NotificationType.WARNING,
            message: NotificationMessage.DELETE_ITEM
        });
    }
}
