import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app'; /* importe automatiquement le fichier index dans le folder qui inclut tous les exports */
import { Main, NotesContainer } from './app/containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui';


@NgModule({
    /*list of modules want to use in our app*/
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard, 
        NotesContainer,
        NoteCreator,
        ColorPicker,
    ], 
    imports: [BrowserModule, FormsModule],
    /* load component when component is bootstrapped */
    bootstrap: [App]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);

