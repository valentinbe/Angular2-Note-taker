import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bar',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .app-bar {
        height: 65px;
        padding: 5px 30px;
        background-color: #FF9800;
        }
        .logo {
        color: white;
        font-size: 30px;
        font-weight: 300;
        cursor: pointer;
        }
        .link {
        color: white;
        font-size: 24px;
        font-weight: 400;
        cursor: pointer; 
        }
    `],
    template: `
        <header class="app-bar row middle-xs">
        <span 
            [routerLink]="['']"
            class="logo col-xs-10">
            Harvestr
        </span>
        <nav class="col-xs-2">
            <div class="row middle-xs between-xs">
            <span class="link"
                [routerLink]="['', 'about']"
            >About</span>
            <span class="link"
                (click)="onSignout()"
            >signout</span>
            </div>
        </nav>
        </header>
    `
})

export class AppBar {
    @Output() signOut = new EventEmitter();

    onSignout() {
        this.signOut.next();
    }
};
