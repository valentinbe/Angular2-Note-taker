import { Component, OnDestroy } from '@angular/core';
import { NoteService } from '../services';
import { Store } from '../store'


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
export class NotesContainer implements OnDestroy {
    notes = [] 

    /** subscribe to observables */
    constructor(
        private NotesService: NoteService,
        private store: Store
        ) {
        this.NotesService.getNotes()
        .subscribe(); /** get the data from the response */

        this.store.changes
        .map(data => data.notes)
        .subscribe(notes => this.notes = notes)
        /** our component always receives the states from the store, 
         * whenever the store updates subscription triggers and it updates this compoenent
         */
    }

    onCreateNote(note) {
        this.NotesService.createNote(note)
        .subscribe();
    }

    onNoteChecked(note) {
        /* splice removes elements from an array */
        this.NotesService.completeNote(note)
        .subscribe();
    }

    ngOnDestroy() {
        console.log('destroyed');
    }
};
