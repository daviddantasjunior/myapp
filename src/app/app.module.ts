import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromApp from './store/app.reducer';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PlayListComponent } from './views/play-list/play-list.component';
import { AuthComponent } from './views/auth/auth.component';
import { SignupComponent } from './views/signup/signup.component';
import { MovieSelectionComponent } from './views/movie-selection/movie-selection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MetricsComponent } from './views/metrics/metrics.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PlayMoviesComponent } from './views/play-movies/play-movies.component';

const reducers: ActionReducerMap<fromApp.AppState> = {
  playList: fromApp.appReducer.playList,
  auth: fromApp.appReducer.auth
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['playList', 'auth'], rehydrate: true, storage: localStorage })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    AuthComponent,
    SignupComponent,
    MovieSelectionComponent,
    NavbarComponent,
    MetricsComponent,
    ProfileComponent,
    PlayMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
