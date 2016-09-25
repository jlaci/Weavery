import { Component } from '@angular/core';

@Component({
    selector: 'task-master-app',
    templateUrl: 'app/main.html'
})

export class AppComponent {
    address = '127.0.0.1';
    port = '8880';
}