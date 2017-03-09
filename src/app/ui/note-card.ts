import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
            padding: 15px;
            border-radius: 2px;
            width: 100%;
            position: relative;
        }
        .title {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: left;
            color: rgba(0,0,0,0.8);
        }
        .value {
            text-align: left;
            font-size: 1.4rem;
            font-weight: 200;
        }
        .icon {
            position: absolute;
            color: black;
            border: 1px solid lightgrey;
            background-color: white;
            font-size: 30px;
            top: -10px;
            left: -10px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            cursor: pointer; 
        }
    `],
    template: `
        <div 
            class="note-card row shadow-1"
            [ngStyle]="{'background-color': noteTest.color}"
            (mouseleave)="toggleCheck()"
            (mouseenter)="toggleCheck()"
        >
        <div 
            class="icon" 
            (click)="onChecked()"
            *ngIf="showCheck"
        >
            <i class="material-icons">check</i>
        </div>
        <div class="col-xs-12 title">
            {{ noteTest.title }}
        </div>
        <div class="col-xs-12 value">
            {{ noteTest.value }}
        </div>
        </div>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class NoteCard {
    @Input() noteTest = {};
    /* création d'un evenemnt*/
    @Output() checked = new EventEmitter();

    showCheck: boolean = false;

    toggleCheck(){
        this.showCheck = !this.showCheck;
    }

    /* crée une fonction appellée au trigger d'un événement  */
    onChecked() {
        /* passe un evenemtn qui peut etre ecouté par un autre component */
        this.checked.next(this.noteTest);
    }
};
