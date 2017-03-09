import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' 
import { Main, NotesContainer, About } from './containers';

/** routes is a module */
/** cest lepremier module chargé a louverture de la page, ensuite launch Main */
export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Main,
    children: [
      { path: '', component: NotesContainer },
      { path: 'about', component: About }
    ]
  },
  { path: '**', redirectTo: '' } /** ** means anything else */
]);
