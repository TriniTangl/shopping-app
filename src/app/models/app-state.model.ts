import {DialogState} from './dialog.model';
import {ShoppingState} from './shopping.model';

export interface AppState {
    readonly shopping: ShoppingState;
    readonly dialog: DialogState;
}
