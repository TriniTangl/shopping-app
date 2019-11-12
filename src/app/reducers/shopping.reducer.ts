import {ShoppingActions, ShoppingActionTypes} from '../actions/shopping.actions';
import {ShoppingState} from '../models/shopping.model';

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingActions): ShoppingState {
    switch (action.type) {
        case ShoppingActionTypes.LOAD_ITEMS:
        case ShoppingActionTypes.ADD_ITEM:
        case ShoppingActionTypes.DELETE_ITEM:
        case ShoppingActionTypes.EDIT_ITEM:
            return {
                ...state,
                loading: true
            };
        case ShoppingActionTypes.LOAD_ITEMS_FAILURE:
        case ShoppingActionTypes.ADD_ITEM_FAILURE:
        case ShoppingActionTypes.DELETE_ITEM_FAILURE:
        case ShoppingActionTypes.EDIT_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case ShoppingActionTypes.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case ShoppingActionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            };
        case ShoppingActionTypes.EDIT_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload.id ? action.payload : item),
                loading: false
            };
        default:
            return state;
    }
}
