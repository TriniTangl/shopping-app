import {ShoppingItem} from './shopping.model';

export interface DialogState {
    isOpen: boolean;
    isEdit: boolean;
    data: ShoppingItem;
}
