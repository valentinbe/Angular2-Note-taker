import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()

export class NoteService {
    path: string = '/notes';
    constructor(private api: ApiService) {

    }

    createNote(note) {
        return this.api.post(this.path, note);
    }

    getNotes() {
        return this.api.get(this.path);
    }

    completeNote(note) {
        /** this notation because we use a RESTful interface */
        return this.api.delete(`${this.path}/${note.id}`);
    }
}

