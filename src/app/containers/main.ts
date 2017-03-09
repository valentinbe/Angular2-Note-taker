import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main-container-class">
                <router-outlet></router-outlet>
            </main>
        </div>
    `

})

export class Main {};
