import { Component } from '@angular/core';
import { NoteService } from '../services';



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
                "
                (checked)="onNoteChecked($event)"
            >
            </note-card>
            </div>
        </div>
        </div>
    `
})

/* on crée une note quon va passer au component noteUI*/
export class NotesContainer {
    notes = [] 

    /** subscribe to observables */
    constructor(private NotesService: NoteService) {
        this.NotesService.getNotes()
        .subscribe(resp => this.notes = resp.data); /** get the data from the response */
    }

    onCreateNote(note) {
        this.NotesService.createNote(note)
        .subscribe(note => this.notes.push(note));
    }

    onNoteChecked(note) {
        /* splice removes elements from an array */
        this.NotesService.completeNote(note)
        .subscribe(note => {
            const i = this.notes.findIndex(localNote => localNote.id === note.id);
            this.notes.splice(i, 1);
        })
    }
};
