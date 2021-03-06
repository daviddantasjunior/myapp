import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { SignupComponent } from './views/signup/signup.component';
import { MovieSelectionComponent } from './views/movie-selection/movie-selection.component';
import { MetricsComponent } from './views/metrics/metrics.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PlayMoviesComponent } from './views/play-movies/play-movies.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movie-selection', component: MovieSelectionComponent },
  { path: 'movie-selection/:id', component: PlayMoviesComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
