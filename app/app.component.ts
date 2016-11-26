import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My Angular 2 App!</a>
                </div>
            </nav>
        </header>

        <main>

            <div class="row">

                <div class="col-sm-4">
                    <div *ngIf="users">
                        <ul class="list-group users-list">
                            <li class="list-group-item"
                            *ngFor="let user of users"
                            (click)="selectUser(user)"
                            [class.active]="user === activeUser">
                                {{ user.name }} ({{ user.username }})
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-8">
                    <div class="jumbotron" *ngIf="activeUser">
                        <h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
                    </div>

                    <div class="jumbotron" *ngIf="!activeUser">
                        <h2>Choose a user</h2>
                        <span class="glyphicon glyphicon-hand-left"></span>
                    </div>
                </div>

            </div>

        </main>

        <footer class="text-center">
            Copyright &copy; 2016
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
        .users-list li {
            cursor: pointer;
        }
        .jumbotron .glyphicon {
            font-size: 80px;
        }
    `]
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
