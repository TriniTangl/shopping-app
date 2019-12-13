import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import {CloseDialogAction} from '../../actions/dialog.actions';
import {AddItemAction, EditItemAction} from '../../actions/shopping.actions';
import {AppState} from '../../models/app-state.model';
import {ShoppingItem} from '../../models/shopping.model';
import {NotificationMessage, NotificationService, NotificationType} from '../../services/notification.service';

const DESCRIPTION = {
    textEdit: {
        header: 'Edit item',
        buttonTitle: 'Save item',
        buttonText: '✓'
    },
    textCreate: {
        header: 'Create item',
        buttonTitle: 'Add new item',
        buttonText: '+'
    }
};

@Component({
    selector: 'app-shopping-dialog',
    templateUrl: './shopping-dialog.component.html',
    styleUrls: ['./shopping-dialog.component.scss']
})
export class ShoppingDialogComponent implements OnInit {
    public isEdit: boolean;
    public shoppingItem: ShoppingItem;
    public description: { [key: string]: string };
    public formDialog: FormGroup;

    constructor(
        private store: Store<AppState>,
        private notificationService: NotificationService) {
    }

    @HostListener('document:keyup', ['$event']) keyUpHandler(event: KeyboardEvent): void {
        switch (event.key) {
            case 'Enter':
                this.confirmDialog();
                break;
            case 'Escape':
                this.closeDialog();
                break;
            default:
                break;
        }
    }

    ngOnInit() {
        this.store.select(store => store.dialog.data).subscribe(
            item => this.shoppingItem = item ? item : {
                id: '',
                name: '',
                amount: 0,
                amountInCart: 0
            });
        this.store.select(store => store.dialog.isEdit).subscribe(value => this.isEdit = value);
        this.description = this.isEdit ? DESCRIPTION.textEdit : DESCRIPTION.textCreate;

        this.formDialog = new FormGroup({
            name: new FormControl(this.shoppingItem.name, [
                Validators.required
            ]),
            amount: new FormControl(this.shoppingItem.amount, [
                Validators.required,
                Validators.pattern('[0-9]*')
            ])
        });
    }

    public closeDialog(): void {
        this.store.dispatch(new CloseDialogAction());
    }

    public confirmDialog(): void {
        if (this.formDialog.valid) {
            this.shoppingItem = {
                ...this.shoppingItem,
                ...this.formDialog.value
            };

            if (this.isEdit) {
                this.store.dispatch(new EditItemAction(this.shoppingItem));
                this.notificationService.setNotification({
                    type: NotificationType.SUCCESS,
                    message: NotificationMessage.EDIT_ITEM
                });
            } else {
                this.shoppingItem.id = uuid();
                this.store.dispatch(new AddItemAction(this.shoppingItem));
                this.notificationService.setNotification({
                    type: NotificationType.SUCCESS,
                    message: NotificationMessage.ADD_NEW_ITEMS
                });
            }

            this.store.dispatch(new CloseDialogAction());
        }
    }
}
