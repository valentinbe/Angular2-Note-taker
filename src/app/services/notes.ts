import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper';
import { Note } from '../store';
import 'rxjs/Rx';

@Injectable()

export class NoteService {
    path: string = '/notes';
    constructor(
        private apiService: ApiService,
        private storeHelper: StoreHelper
        ) {
    }

    createNote(note: Note) {
        /** the ".do" gets the response and do something with it */
        return this.apiService.post(this.path, note)
        .do(savedNote => this.storeHelper.add('notes', savedNote));

        /** whoever subscribe to this subscribenote method we take the data from the server 
         * and add it to the notes collection inside the store here (add is basically a push) storeHelper 
         * guarantees its immutable */
    }

    getNotes() {
        return this.apiService.get(this.path)
        .do((res: any) => this.storeHelper.update('notes', res.data));
        /*** update overwrites the entire collection of notes */
    }

    completeNote(note: Note) {
        /** this notation because we use a RESTful interface */
        return this.apiService.delete(`${this.path}/${note.id}`)
        .do((res: any) => this.storeHelper.findAndDelete('notes', res.id));
    }
}
