import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [` 
       .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
            height: 100px;
        }
    `],
    template: `
        <div class="note-creator shadow-2"
            [ngStyle]="{'background-color': newNote.color}"
        >
        <form 
            class="row"
            (submit)="onCreateNote()"        
        >
            <input
                type="text"
                *ngIf="formExpanded"
                [(ngModel)]="newNote.title"
                name="newNoteTitle"
                placeholder="Title"
                class="col-xs-10 title"
            >
            <input
                type="text"
                (focus)="toggle(true)"
                [(ngModel)]="newNote.value"
                name="newNoteValue"
                placeholder="Take a note..."
                class="col-xs-10" 
            >
            <div 
                class="actions col-xs-12 row between-xs"
                *ngIf="formExpanded"
            >
                <div class="col-xs-3">
                    <color-picker
                        [colors]="colors"
                        (selected)="onColorSelect($event)"
                    >
                    </color-picker>
                </div>
                <button
                    type="submit"
                    class="btn-light"
                >
                    Done
                </button>
            </div>
        </form>
        <pre
            *ngIf="formExpanded"
        > {{ newNote | json}}</pre>
        </div>
    `
})

/* dans le pre il y a un pipe qui transforme comment ca saffiche dans la page
cest une transformation de vus qui tranfsforme au format json */
export class NoteCreator {
    formExpanded: boolean = false;
    colors: string[] = ['#801321', '#456213', '#754213'];

    @Output() createNote = new EventEmitter();

    /* le ngModule est bidirectionnel */
    newNote = {
        title: '',
        value: '',
        color: 'white',
    }

    onCreateNote() {
        const { title, value, color } = this.newNote;
        if (title && value) {
            /* fire event Output createnote */
            this.createNote.next({title, value, color});
        }
        this.reset();
        this.toggle(false);
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white',
        }
    }

    toggle(value: boolean) {
        this.formExpanded = value;
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
};
