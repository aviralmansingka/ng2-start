import { Component } from '@angular/core';

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

            <div class="jumbotron">
                <h1>Welcome to our App!</h1>
            </div>

            <div *ngIf="users">
                <div *ngFor="let user of users">
                    <p>{{ user.name }} ({{ user.username }})</p>
                </div>
            </div>
        </main>

    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})
export class AppComponent {
    message = 'Hello!';
    users = [
        { id: 25, name: 'Aviral Mansingka', username: 'aviralmansingka' },
        { id: 26, name: 'Mani Kumar', username: 'manikumar' },
        { id: 27, name: 'Nihanshu Purohit', username: 'nihanshu' }
    ];
}
