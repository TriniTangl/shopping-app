import {Component, OnInit} from '@angular/core';
import {Notification, NotificationService} from '../../services/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    public notification: Notification;
    private timer: any;

    constructor(private notificationService: NotificationService) {
        this.notification = {
            type: '',
            message: ''
        };
        this.notificationService.notification$.subscribe(n => {
            this.notification = n;
            this.timer = setTimeout(() => {
                this.closeNotification();
            }, 3000);
        });
    }

    ngOnInit() {
    }

    public closeNotification() {
        this.notification.message = '';
        clearTimeout(this.timer);
    }
}
