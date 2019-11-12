import {DialogActions, DialogActionTypes} from '../actions/dialog.actions';
import {DialogState} from '../models/dialog.model';

const initialState: DialogState = {
    isOpen: false,
    isEdit: false,
    data: null
};

export function DialogReducer(state: DialogState = initialState, action: DialogActions): DialogState {
    switch (action.type) {
        case DialogActionTypes.OPEN_DIALOG_ADDING:
            return {
                ...state,
                isOpen: true
            };
        case DialogActionTypes.OPEN_DIALOG_EDITING:
            return {
                isOpen: true,
                isEdit: true,
                data: action.payload
            };
        case DialogActionTypes.CLOSE_DIALOG:
            return initialState;
        default:
            return state;
    }
}
