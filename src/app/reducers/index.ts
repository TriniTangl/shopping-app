import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../models/app-state.model';
import {ShoppingReducer} from './shopping.reducer';

export const reducers: ActionReducerMap<AppState> = {
    shopping: ShoppingReducer,
    dialog: null
};
