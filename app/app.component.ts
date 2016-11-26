import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Aviral Mansingka', username: 'aviralmansingka' },
        { id: 26, name: 'Mani Kumar', username: 'manikumar' },
        { id: 27, name: 'Nihanshu Purohit', username: 'nihanshu' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
