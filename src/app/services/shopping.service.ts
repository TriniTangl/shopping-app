import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ShoppingItem} from '../models/shopping.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    private readonly API_URL = 'http://localhost:3000/shopping';

    constructor(private http: HttpClient) {
    }

    public getShoppingItems(): Observable<Array<ShoppingItem>> {
        return this.http.get<Array<ShoppingItem>>(this.API_URL).pipe(
            delay(250)
        );
    }

    public addShoppingItem(item: ShoppingItem): Observable<any> {
        return this.http.post(this.API_URL, item).pipe(
            delay(250)
        );
    }

    public deleteShoppingItem(id: string): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(
            delay(250)
        );
    }

    public editShoppingItem(item: ShoppingItem): Observable<any> {
        return this.http.put(`${this.API_URL}/${item.id}`, item).pipe(
            delay(250)
        );
    }
}
