import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px; 
        }
    `],
    template: `
        <div class="row center-xs notes">
        <div class="col-xs-6 creator">
            <note-creator
                (createNote)="onCreateNote($event)"
            ></note-creator>
        </div>
        <div class="notes col-xs-8">
            <div class="row between-xs">
            <note-card
                class="col-xs-4"
                [noteTest]="note"
                *ngFor="
                    let note of notes;
                    let i = index;
                "
                (checked)="onNoteChecked(i)"
            >
            </note-card>
            </div>
        </div>
        </div>
    `
})

/* on crée une note quon va passer au component noteUI*/
export class NotesContainer {
    notes = [
        {
            title: 'test titre', 
            value: 'contenu test',
            color: 'lightblue',
        },
        {
            title: 'test titre2', 
            value: 'contenu test2',
            color: 'red',
        },
        {
            title: 'test titre3', 
            value: 'contenu test3',
            color: 'yellow',
        },
    ] 

    onNoteChecked(i : number) {
        /* splice removes elements from an array */
        this.notes.splice(i, 1);
    }

    onCreateNote(note) {
        this.notes.push(note);
    }
};
