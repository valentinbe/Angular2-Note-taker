import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, providers, routes } from './app'; /* importe automatiquement le fichier index dans le folder qui inclut tous les exports */
import { Main, NotesContainer, About, Auth } from './app/containers';
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
        About,
        Auth,
    ], 
    /* pours les services */
    providers,
    imports: [BrowserModule, FormsModule, HttpModule, routes],
    /* load component when component is bootstrapped */
    bootstrap: [App]
})
export class AppModule{};

platformBrowserDynamic().bootstrapModule(AppModule);

