import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
    AddItemAction,
    AddItemFailureAction,
    AddItemSuccessAction,
    DeleteItemAction,
    DeleteItemFailureAction,
    DeleteItemSuccessAction,
    EditItemAction,
    EditItemFailureAction,
    EditItemSuccessAction,
    LoadItemsAction,
    LoadItemsFailureAction,
    LoadItemsSuccessAction,
    ShoppingActionTypes
} from '../actions/shopping.actions';
import {ShoppingService} from '../services/shopping.service';

@Injectable()
export class ShoppingEffects {
    @Effect() loadShoppingItems$: Observable<any>;
    @Effect() addShoppingItem$: Observable<any>;
    @Effect() deleteShoppingItem$: Observable<any>;
    @Effect() editShoppingItem$: Observable<any>;

    constructor(
        private actions$: Actions,
        private shoppingService: ShoppingService
    ) {
        this.loadShoppingItems$ = this.actions$.pipe(
            ofType<LoadItemsAction>(ShoppingActionTypes.LOAD_ITEMS),
            mergeMap(
                () => this.shoppingService.getShoppingItems().pipe(
                    map((data) => new LoadItemsSuccessAction(data)),
                    catchError((error) => of(new LoadItemsFailureAction(error)))
                )
            )
        );
        this.addShoppingItem$ = this.actions$.pipe(
            ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.shoppingService.addShoppingItem(data.payload).pipe(
                    map(() => new AddItemSuccessAction(data.payload)),
                    catchError((error) => of(new AddItemFailureAction(error)))
                )
            )
        );
        this.deleteShoppingItem$ = this.actions$.pipe(
            ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.shoppingService.deleteShoppingItem(data.payload).pipe(
                    map(() => new DeleteItemSuccessAction(data.payload)),
                    catchError((error) => of(new DeleteItemFailureAction(error)))
                )
            )
        );
        this.editShoppingItem$ = this.actions$.pipe(
            ofType<EditItemAction>(ShoppingActionTypes.EDIT_ITEM),
            mergeMap(
                (data) => this.shoppingService.editShoppingItem(data.payload).pipe(
                    map(() => new EditItemSuccessAction(data.payload)),
                    catchError((error) => of(new EditItemFailureAction(error)))
                )
            )
        );
    }
}
