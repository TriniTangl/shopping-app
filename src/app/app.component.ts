import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './models/app-state.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public isOpen$: Observable<boolean>;
    public error$: Observable<Error>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.isOpen$ = this.store.select(store => store.dialog.isOpen);
        this.error$ = this.store.select(store => store.shopping.error);
    }
}
