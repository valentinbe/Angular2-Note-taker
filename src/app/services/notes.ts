import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper';
import 'rxjs/Rx';

@Injectable()

export class NoteService {
    path: string = '/notes';
    constructor(
        private api: ApiService,
        private storeHelper: StoreHelper
        ) {
    }

    createNote(note) {
        /** the do gets the response and do something with it */
        return this.api.post(this.path, note)
        .do(savedNote => this.storeHelper.add('notes', savedNote));
        /** whoever subscribe to this subscribenote method we take the data from the server 
         * and add it to the notes collection inside the store here (add is basically a push) storeHelper 
         * guarantees its immutable */
    }

    getNotes() {
        return this.api.get(this.path)
        .do((resp: any) => this.storeHelper.update('notes', resp.data));
        /*** update overwrites the entire collection of notes */
    }

    completeNote(note) {
        /** this notation because we use a RESTful interface */
        return this.api.delete(`${this.path}/${note.id}`)
        .do((resp: any) => this.storeHelper.findAndDelete('notes', resp.id));
    }
}

