import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ShoppingDialogComponent} from './components/shopping-dialog/shopping-dialog.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingEffects} from './effects/shopping.effects';
import {reducers} from './reducers';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingCartComponent,
        ShoppingListComponent,
        ShoppingDialogComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([ShoppingEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
