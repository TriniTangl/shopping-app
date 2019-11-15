import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping.model';

export enum ShoppingActionTypes {
    LOAD_ITEMS = '[SHOPPING] Load Items',
    LOAD_ITEMS_SUCCESS = '[SHOPPING] Load Items Success',
    LOAD_ITEMS_FAILURE = '[SHOPPING] Load Items Failure',
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
    EDIT_ITEM = '[SHOPPING] Edit Item',
    EDIT_ITEM_SUCCESS = '[SHOPPING] Edit Item Success',
    EDIT_ITEM_FAILURE = '[SHOPPING] Edit Item Failure'
}

export class LoadItemsAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_ITEMS;
}

export class LoadItemsSuccessAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_ITEMS_SUCCESS;

    constructor(public payload: Array<ShoppingItem>) {
    }
}

export class LoadItemsFailureAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_ITEMS_FAILURE;

    constructor(public payload: Error) {
    }
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {
    }
}

export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

    constructor(public payload: ShoppingItem) {
    }
}

export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;

    constructor(public payload: Error) {
    }
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;

    constructor(public payload: string) {
    }
}

export class DeleteItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

    constructor(public payload: string) {
    }
}

export class DeleteItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;

    constructor(public payload: Error) {
    }
}

export class EditItemAction implements Action {
    readonly type = ShoppingActionTypes.EDIT_ITEM;

    constructor(public payload: ShoppingItem) {
    }
}

export class EditItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.EDIT_ITEM_SUCCESS;

    constructor(public payload: ShoppingItem) {
    }
}

export class EditItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.EDIT_ITEM_FAILURE;

    constructor(public payload: Error) {
    }
}

export type ShoppingActions = LoadItemsAction
    | LoadItemsSuccessAction
    | LoadItemsFailureAction
    | AddItemAction
    | AddItemSuccessAction
    | AddItemFailureAction
    | DeleteItemAction
    | DeleteItemSuccessAction
    | DeleteItemFailureAction
    | EditItemAction
    | EditItemSuccessAction
    | EditItemFailureAction;
