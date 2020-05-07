import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayListComponent } from './views/play-list/play-list.component';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromApp from './store/app.reducer';
import { AuthComponent } from './views/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './views/signup/signup.component';

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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
