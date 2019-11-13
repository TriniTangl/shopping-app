import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../models/app-state.model';
import {ShoppingState} from '../models/shopping.model';
import {DialogReducer} from './dialog.reducer';
import {getShoppingItemsInCart, ShoppingReducer} from './shopping.reducer';

export const reducers: ActionReducerMap<AppState> = {
    shopping: ShoppingReducer,
    dialog: DialogReducer
};

export const selectShoppingState = createFeatureSelector<ShoppingState>('shopping');
export const selectShoppingItemInCart = createSelector(selectShoppingState, getShoppingItemsInCart);
