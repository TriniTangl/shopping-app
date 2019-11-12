import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping.model';

export enum DialogActionTypes {
    OPEN_DIALOG_ADDING = '[DIALOG] Open Dialog For Add Item',
    OPEN_DIALOG_EDITING = '[DIALOG] Open Dialog For Edit Item',
    CLOSE_DIALOG = '[DIALOG] Close Dialog'
}

export class OpenDialogAddingAction implements Action {
    readonly type = DialogActionTypes.OPEN_DIALOG_ADDING;
}

export class OpenDialogEditingAction implements Action {
    readonly type = DialogActionTypes.OPEN_DIALOG_EDITING;

    constructor(public payload: ShoppingItem) {
    }
}

export class CloseDialogAction implements Action {
    readonly type = DialogActionTypes.CLOSE_DIALOG;
}

export type DialogActions = OpenDialogAddingAction | OpenDialogEditingAction | CloseDialogAction;
