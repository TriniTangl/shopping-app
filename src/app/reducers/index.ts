import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../models/app-state.model';
import {DialogReducer} from './dialog.reducer';
import {ShoppingReducer} from './shopping.reducer';

export const reducers: ActionReducerMap<AppState> = {
    shopping: ShoppingReducer,
    dialog: DialogReducer
};
