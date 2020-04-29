import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PlayListComponent } from './views/play-list/play-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/play-list', pathMatch: 'full' },
  { path: 'play-list', component: PlayListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
