import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export enum NotificationMessage {
    BUY_ALL = 'You bought all products! The courier is coming!',
    ADD_NEW_ITEMS = 'You added new product.',
    EDIT_ITEM = 'You changed information about some product.',
    DELETE_ITEM = 'You deleted some product.'
}

export enum NotificationType {
    ERROR = 'danger',
    WARNING = 'warning',
    SUCCESS = 'success'
}

export interface Notification {
    type: NotificationType | string;
    message: any;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public notification$: Observable<Notification>;
    private notificationSubject = new Subject<Notification>();

    constructor() {
        this.notification$ = this.notificationSubject.asObservable();
    }

    public setNotification(notification: Notification): void {
        this.notificationSubject.next(notification);
    }
}
